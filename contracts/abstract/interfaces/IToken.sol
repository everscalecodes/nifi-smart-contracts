pragma ton-solidity ^0.41.0;

interface IToken {
    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can change token owner.
     * owner ... Public key of token owner.
     */
    function changeOwner(uint256 owner) external;

    /**
     * Owner can set manager and lock. To prevent manager from replacing during trading, he is locked.
     * If manager is already locked, call revert().
     * manager ...... Contract that governs this contract.
     * unlockTime ... UNIX time. Time when manager can be unlocked.
     */
    function lockManager(address manager, uint32 unlockTime) external;

    /**
     * Owner can lock manager. To prevent manager from replacing during trading, he is locked.
     * If manager is already locked, call revert().
     * unlockTime ... UNIX time. Time when manager can be unlocked.
     */
    function lock(uint32 unlockTime) external;



    /**********************************
     * EXTERNAL * ONLY LOCKED MANAGER *
     **********************************/
    /**
     * Manager can unlock himself.
     * If manager is already unlocked, call revert().
     */
    function unlock() external;



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
    function receiveInfo() external view responsible returns(
            address root,
            uint128 id,
            uint256 publicKey,
            uint256 owner,
            address manager,
            uint32  managerUnlockTime
        );
}