pragma ton-solidity ^0.42.0;
pragma AbiHeader pubkey;

import "../../abstract/TokenPublicKey.sol";
import "interfaces/IArtToken.sol";
import "../../abstract/extensions/tokenChangeOwnerEvent/token/TokenChangeOwnerEvent.sol";

contract ArtToken is TokenPublicKey, TokenChangeOwnerEvent, IArtToken {
    /*************
     * VARIABLES *
     *************/
    uint256   private _creator;
    uint32    private _creatorFees;
    uint256[] private _hashes;



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     * creator ............. Public key of creator.
     * creatorFees ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    constructor(
        uint256 owner,
        address manager,
        uint32  managerUnlockTime,
        uint256 creator,
        uint32  creatorFees,
        uint256 hash
    )
        public
        TokenPublicKey(
            owner,
            manager,
            managerUnlockTime
        )
    {
        _creator = creator;
        _creatorFees = creatorFees;
        _hashes.push(hash);
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns art info.
     * creator ....... Public key of creator.
     * creatorFees ... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash .......... Hash of data that associated with token.
     * hashesCount ... Total count of hashes.
     */
    function receiveArtInfo() override external view responsible returns(
            uint256 creator,
            uint32  creatorFees,
            uint256 hash,
            uint32  hashesCount
        )
    {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }



    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can add new hash.
     * hash ... Hash of data that associated with token.
     */
    function addHash(uint256 hash) override external onlyUnlockedOwnerOrLockedManager accept {
        _hashes.push(hash);
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns art info.
     * creator ............. Public key of creator.
     * creatorFees ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     * hashesCount ......... Total count of hashes.
     */
    function getArtInfo() public view returns(uint256 creator, uint32 creatorFees, uint256 hash, uint32 hashesCount) {
        creator = _creator;
        creatorFees = _creatorFees;
        hashesCount = uint32(_hashes.length);
        hash = _hashes[hashesCount - 1];
    }

    /**
     * offset ........ From which hash number to return.
     * length ........ How many hashes to return.
     * hashes ........ Array of hashes of data that associated with token.
     * hashesCount ... Total count of hashes.
     */
    function getHashes(uint32 offset, uint32 length) public view returns(uint256[] hashes, uint32 hashesCount) {
        uint256[] hashesMemory = _hashes;
        hashesCount = uint32(hashesMemory.length);

        uint32 maxIndex = math.max(offset + length, hashesCount);
        for (uint32 i = offset; i < maxIndex; i++)
            hashes.push(hashesMemory[i]);
    }



    /************
     * INTERNAL *
     ************/
    /**
     * Revert() if owner or manager can't change owner address.
     */
    function _canChangeOwner() override internal {}
}