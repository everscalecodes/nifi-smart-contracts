pragma ton-solidity ^0.43.0;

import "../root/interfaces/IRootTokenChangeOwnerAddress.sol";
import "../../../TokenAddress.sol";

abstract contract TokenChangeOwnerAddressMessageToRoot is TokenAddress {
    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwnerAddress(address previousOwnerAddress, address ownerAddress) override internal {
        IRootTokenChangeOwnerAddress(_root).tokenChangeOwnerAddress{value: 0, bounce: true, flag: 64}(_id, previousOwnerAddress, ownerAddress);
    }
}