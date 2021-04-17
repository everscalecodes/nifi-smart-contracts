pragma ton-solidity ^0.41.0;

import "../../abstract/TokenAddress.sol";
import "./interfaces/ITicketToken.sol";

contract TicketToken is TokenAddress, ITicketToken {
    /*************
     * VARIABLES *
     *************/
    uint128 private _hash;
    uint32  private _freezingTimeStart;
    uint32  private _freezingTimeEnd;



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * ownerAddress ........ Address of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    constructor(
        address ownerAddress,
        address manager,
        uint32  managerUnlockTime,
        uint128 hash,
        uint32  freezingTimeStart,
        uint32  freezingTimeEnd
    ) public TokenAddress(
            ownerAddress,
            manager,
            managerUnlockTime
        )
    {
        _hash = hash;
        _freezingTimeStart = freezingTimeStart;
        _freezingTimeEnd = freezingTimeEnd;
    }

//
//
//    /*******************************************************
//     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
//     *******************************************************/
//    /**
//     * Owner or manager can change token owner address.
//     * ownerAddress ... Address of token owner.
//     */
//    function changeOwnerAddress(address ownerAddress)
//        override
//        external
//        onlyUnlockedOwnerOrLockedManager
//        addressIsNotNull(ownerAddress)
//        accept
//    {
//        _ownerAddress = ownerAddress;
//        emit ChangeOwnerAddressEvent(_id, _ownerAddress).extAddr(_root);
//    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns ticket info.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function receiveTicketInfo() override external view responsible returns(
            uint128 hash,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        )
    {
        return{value: 0, bounce: false, flag: 64} getTicketInfo();
    }



    /***********
     * SETTERS *
     ***********/
    /**
     * Set hash.
     * hash ... Hash of secret code.
     */
    function setHash(uint128 hash) override external onlyUnlockedOwnerOrLockedManager accept {
        _hash = hash;
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns ticket info.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function getTicketInfo() public view returns(
            uint128 hash,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        )
    {
        hash = _hash;
        freezingTimeStart = _freezingTimeStart;
        freezingTimeEnd = _freezingTimeEnd;
    }
}