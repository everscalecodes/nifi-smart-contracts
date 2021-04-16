pragma ton-solidity ^0.41.0;

interface ITokenAddress {
    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can change token owner address.
     * ownerAddress ... Address of token owner.
     */
    function changeOwnerAddress(address ownerAddress) external;



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
    function receiveInfo() external view responsible returns(
            address root,
            uint128 id,
            uint256 publicKey,
            address ownerAddress,
            address manager,
            uint32  managerUnlockTime
        );
}