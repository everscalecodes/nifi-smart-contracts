pragma ton-solidity ^0.42.0;

import "../../abstract/Root.sol";
import "../../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "RandomToken.sol";
import "interfaces/IRandomRoot.sol";

contract RandomRoot is Root, RootManaged, RootManagedCreationFee, RootManagedWithdraw, IRandomRoot {
    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * manager ............ Contract that governs token contract.
     * creationMinValue ... The minimum value that needs to be sent to the root to create a token.
     * creationFee ........ Payment for the work of the contract, plus money for the developers.
     * name ............... UTF8-encoded name of token. e.g. "CryptoKitties"
     * symbol ............. UTF8-encoded symbol of token. e.g. "CK"
     * tokenCode .......... Code of token contract.
     */
    constructor(
        address manager,
        uint128 creationMinValue,
        uint128 creationFee,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(creationMinValue, creationFee)
    {}



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address.
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs token contract.
     *                       If you don't want to set the manager, use 0:000011112222...
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     *                       If you don't want to set the manager, use 0.
     * addr ................ Address of the token contract.
     */
    function create(uint256 owner, address manager, uint32 managerUnlockTime)
        override
        external
        creationPaymentIsEnough
        returns(
            address addr
        )
    {
        uint128 value = msg.value - _creationFee;
        addr = new RandomToken{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime);
        _totalSupply++;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Receive the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function receiveTokenAddress(uint128 id) override external view responsible returns(address addr) {
        return{value: 0, bounce: false, flag: 64} getTokenAddress(id);
    }



    /***********
     * GETTERS *
     ***********/
     /**
     * Returns the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function getTokenAddress(uint128 id) override public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: RandomToken,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }
}