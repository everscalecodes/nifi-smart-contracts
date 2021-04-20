pragma ton-solidity ^0.42.0;

interface ITicketRoot {
    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     * ownerAddress ........ Address of token owner.
     * hash ................ Hash of secret code.
     * addr ................ Address of the token contract.
     */
    function create(address ownerAddress, uint128 hash) external returns(
            address addr
        );
}