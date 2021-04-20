pragma ton-solidity ^0.42.0;

import "Token.sol";
import "interfaces/ITokenAddress.sol";

/**
 * ███╗   ██╗███████╗████████╗
 * ████╗  ██║██╔════╝╚══██╔══╝
 * ██╔██╗ ██║█████╗     ██║
 * ██║╚██╗██║██╔══╝     ██║
 * ██║ ╚████║██║        ██║
 * ╚═╝  ╚═══╝╚═╝        ╚═╝
 * Non-fungible token
 *
 * Error codes
 *     100 - Method for the owner only
 *     101 - Method for the manager only
 *     102 - Method for the owner or manager only
 *     103 - Method for the root only
 *     104 - Manager unlocked
 *     105 - Manager locked
 *     106 - Invalid lock time
 *
 *     201 - Address can't be null
 */
abstract contract TokenAddress is Token, ITokenAddress {
    /*************
     * VARIABLES *
     *************/
    address private _ownerAddress;



    /*************
     * MODIFIERS *
     *************/
    modifier canChangeOwnerAddress() {
        _canChangeOwnerAddress();
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * ownerAddress ........ Address of token owner.
     * manager ............. Contract that governs this contract.
     *                       If you don't want to set the manager, use 0:0000111122223333...
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     *                       If you don't want to set the manager, use 0.
     */
    constructor(address ownerAddress, address manager, uint32 managerUnlockTime)
        public
        addressIsNotNull(ownerAddress)
        Token(manager, managerUnlockTime)
    {
        _ownerAddress = ownerAddress;
    }



    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can change token owner address.
     * ownerAddress ... Address of token owner.
     */
    function changeOwnerAddress(address ownerAddress)
        override
        external
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(ownerAddress)
        canChangeOwnerAddress
        accept
    {
        address previousOwnerAddress = _ownerAddress;
        _ownerAddress = ownerAddress;
        _onChangeOwnerAddress(previousOwnerAddress, ownerAddress);
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns basic information about token.
     * root ............... Address of root contract.
     * id ................. Id of token.
     * publicKey .......... Public key of root contract. tvm.pubkey()
     * ownerAddress ....... Address of token owner.
     * manager ............ Contract that governs this contract.
     * managerUnlockTime .. UNIX time. Time when manager can be unlocked.
     */
    function receiveInfo() override external view responsible returns(
            address root,
            uint128 id,
            uint256 publicKey,
            address ownerAddress,
            address manager,
            uint32  managerUnlockTime
        )
    {
        return{value: 0, bounce: false, flag: 64} getInfo();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns basic information about token.
     * root ............... Address of root contract.
     * id ................. Id of token.
     * publicKey .......... Public key of root contract. tvm.pubkey()
     * ownerAddress ....... Address of token owner.
     * manager ............ Contract that governs this contract.
     * managerUnlockTime .. UNIX time. Time when the manager can be unlocked.
     */
    function getInfo() public view returns(
            address root,
            uint128 id,
            uint256 publicKey,
            address ownerAddress,
            address manager,
            uint32  managerUnlockTime
        )
    {
        root = _root;
        id = _id;
        publicKey = tvm.pubkey();
        ownerAddress = _ownerAddress;
        manager = _manager;
        managerUnlockTime = _managerUnlockTime;
    }



    /************
     * INTERNAL *
     ************/
    /**
     * Returns true if contract called by owner.
     */
    function _onlyOwner() override internal view returns(bool) {
        return msg.sender == _ownerAddress;
    }

    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwnerAddress(address previousOwnerAddress, address ownerAddress) virtual internal;

    /**
     * Revert() if owner or manager can't change owner address.
     */
    function _canChangeOwnerAddress() virtual internal;
}