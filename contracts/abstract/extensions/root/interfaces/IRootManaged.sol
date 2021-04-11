pragma ton-solidity ^0.40.0;

interface IRootManaged {
    /***************************
     * EXTERNAL * ONLY MANAGER *
     ***************************/
    /**
     * Manager can change manager.
     * manager ... Contract that governs this contract.
     */
    function changeManager(address manager) external;
}