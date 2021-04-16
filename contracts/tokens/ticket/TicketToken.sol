pragma ton-solidity ^0.41.0;

import "../../abstract/TokenAddress.sol";

contract TicketToken is TokenAddress {
    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * ownerAddress ........ Address of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     */
    constructor(address ownerAddress, address manager, uint32 managerUnlockTime) public TokenAddress(
        ownerAddress,
        manager,
        managerUnlockTime
    )
    {
    }
}