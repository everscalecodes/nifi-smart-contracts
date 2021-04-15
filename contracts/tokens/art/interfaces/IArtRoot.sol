pragma ton-solidity ^0.41.0;

interface IArtRoot {
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs token contract.
     *                       If you don't want to set the manager, use 0:000011112222...
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     *                       If you don't want to set the manager, use 0.
     * addr ................ Address of the token contract.
     * creator ............. Public key of creator.
     * creatorFees ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    function create(
        uint256 owner,
        address manager,
        uint32  managerUnlockTime,
        uint256 creator,
        uint32  creatorFees,
        uint256 hash
    )
        external
        returns(
            address addr
        );
}