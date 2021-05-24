pragma ton-solidity ^0.44.0;

import "../abstract/Root.sol";
import "../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../abstract/extensions/rootManaged/root/RootManagedCreationAndStorageFee.sol";
import "../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "Offer.sol";

contract OfferRoot is Root, RootManaged, RootManagedCreationAndStorageFee, RootManagedWithdraw {

    
    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * name ........ UTF8-encoded name of token. e.g. "CryptoKitties"
     * symbol ...... UTF8-encoded symbol of token. e.g. "CK"
     * tokenCode ... Code of token contract.
     */
    constructor(
        address manager,
        uint128 creationMinValue,
        uint128 creationFee,
        uint128 creationAndStorageFee,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationAndStorageFee(creationMinValue, creationFee, creationAndStorageFee)
    {
    }



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     */
    function create(
        address creator,
        address token,
        uint128 price,
        uint32  endTime
    )
        external creationPaymentIsEnoughPrice(price)
        returns(
            address addr
        )
    {
        uint128 value = msg.value - _creationFee;
        addr = new Offer{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }( creator, token, price, endTime);
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
            contr: Offer,
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