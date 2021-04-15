pragma ton-solidity ^0.40.0;

import "interfaces/IToken.sol";

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
 *     104 - Owner public key can't be null
 *     105 - Manager address can't be null
 *     106 - Manager unlocked
 *     107 - Manager locked
 *     108 - Invalid lock time
 */
abstract contract Token is IToken {
    /**********
     * EVENTS *
     **********/
    event ChangeOwnerEvent(
        uint128 id,
        uint256 owner
    );



    /**********
     * STATIC *
     **********/
    address static _root;
    uint128 static _id;



    /*************
     * VARIABLES *
     *************/
    uint256 private _owner;
    address private _manager;
    uint32  private _managerUnlockTime;



    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }

    modifier onlyOwner() {
        require(msg.pubkey() == _owner, 100, "Method for the owner only");
        _;
    }

    modifier onlyManager {
        require(msg.sender == _manager, 101, "Method for the manager only");
        _;
    }

    modifier onlyOwnerIfUnlockedOrLockedManager {
        require(
            (msg.pubkey() == _owner && now >= _managerUnlockTime) ||
            (msg.sender == _manager && now < _managerUnlockTime),
            102,
            "Method for the owner or manager only"
        );
        _;
    }

    modifier onlyRoot() {
        require(msg.sender == _root, 103, "Method for the root only");
        _;
    }

    modifier ownerIsNotNull(uint256 owner) {
        require(owner != 0, 104, "Owner public key can't be null");
        _;
    }

    modifier managerIsNotNull(address manager) {
        require(manager.value != 0, 105, "Manager address can't be null");
        _;
    }

    modifier locked() {
        require(now < _managerUnlockTime, 106, "Manager unlocked");
        _;
    }

    modifier unlocked() {
        require(now >= _managerUnlockTime, 107, "Manager locked");
        _;
    }

    modifier unlockTimeIsValid(uint32 unlockTime) {
        require(now < unlockTime, 108, "Invalid lock time");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs this contract.
     *                       If you don't want to set the manager, use 0:0000111122223333...
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     *                       If you don't want to set the manager, use 0.
     */
    constructor(uint256 owner, address manager, uint32 managerUnlockTime)
        public
        onlyRoot
        ownerIsNotNull(owner)
        managerIsNotNull(manager)
        unlockTimeIsValid(managerUnlockTime)
        accept
    {
        _owner = owner;
        _manager = manager;
        _managerUnlockTime = managerUnlockTime;
    }



    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can change token owner.
     * owner ... Public key of token owner.
     */
    function changeOwner(uint256 owner)
        override
        external
        onlyOwnerIfUnlockedOrLockedManager
        ownerIsNotNull(owner)
        accept
    {
        _owner = owner;
        emit ChangeOwnerEvent(_id, _owner).extAddr(_root);
    }

    /**
     * Owner can set manager and lock. To prevent manager from replacing during trading, he is locked.
     * If manager is already locked, call revert().
     * manager ...... Contract that governs this contract.
     * unlockTime ... UNIX time. Time when manager can be unlocked.
     */
    function lockManager(address manager, uint32 unlockTime)
        override
        external
        onlyOwnerIfUnlockedOrLockedManager
        managerIsNotNull(manager)
        unlockTimeIsValid(unlockTime)
        accept
    {
        _manager = manager;
        _managerUnlockTime = unlockTime;
    }

    /**
     * Owner can lock manager. To prevent manager from replacing during trading, he is locked.
     * If manager is already locked, call revert().
     * unlockTime ... UNIX time. Time when manager can be unlocked.
     */
    function lock(uint32 unlockTime)
        override
        external
        onlyOwnerIfUnlockedOrLockedManager
        unlockTimeIsValid(unlockTime)
        accept
    {
        _managerUnlockTime = unlockTime;
    }



    /**********************************
     * EXTERNAL * ONLY LOCKED MANAGER *
     **********************************/
    /**
     * Manager can unlock himself and change owner.
     * If manager is already unlocked, call revert().
     * owner ... Public key of token owner.
     */
    function unlockAndChangeOwner(uint256 owner) override external onlyManager locked ownerIsNotNull(owner) {
        _owner = owner;
        _managerUnlockTime = 0;
        emit ChangeOwnerEvent(_id, _owner).extAddr(_root);
    }

    /**
     * Manager can unlock himself.
     * If manager is already unlocked, call revert().
     */
    function unlock() override external onlyManager locked accept {
        _managerUnlockTime = 0;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns basic information about token.
     * root ............... Address of root contract.
     * id ................. Id of token.
     * publicKey .......... Public key of root contract. tvm.pubkey()
     * owner .............. Public key of token owner.
     * manager ............ Contract that governs this contract.
     * managerUnlockTime .. UNIX time. Time when manager can be unlocked.
     */
    function receiveInfo() override external view responsible returns(
            address root,
            uint128 id,
            uint256 publicKey,
            uint256 owner,
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
     * owner .............. Public key of token owner.
     * manager ............ Contract that governs this contract.
     * managerUnlockTime .. UNIX time. Time when the manager can be unlocked.
     */
    function getInfo() public view returns(
            address root,
            uint128 id,
            uint256 publicKey,
            uint256 owner,
            address manager,
            uint32  managerUnlockTime
        )
    {
        root = _root;
        id = _id;
        publicKey = tvm.pubkey();
        owner = _owner;
        manager = _manager;
        managerUnlockTime = _managerUnlockTime;
    }
}