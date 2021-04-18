pragma ton-solidity ^0.41.0;

interface IRootTokenChangeOwnerAddress {
    /************
     * EXTERNAL *
     ************/
    /**
     * Call after change of address of token owner.
     * id ..................... Id of token.
     * previousOwnerAddress ... Previous address of owner.
     * ownerAddress ........... New address of owner.
     */
    function tokenChangeOwnerAddress(uint128 id, address previousOwnerAddress, address ownerAddress) external;
}