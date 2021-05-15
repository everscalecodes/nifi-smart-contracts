pragma ton-solidity ^0.43.0;

import "../../../TokenAddress.sol";

abstract contract TokenChangeOwnerAddressEvent is TokenAddress {
    /**********
     * EVENTS *
     **********/
    event ChangeOwnerAddressEvent(
        uint128 id,
        address previousOwnerAddress,
        address ownerAddress
    );

    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwnerAddress(address previousOwnerAddress, address ownerAddress) override internal {
        emit ChangeOwnerAddressEvent(_id, previousOwnerAddress, ownerAddress).extAddr(_root);
    }
}