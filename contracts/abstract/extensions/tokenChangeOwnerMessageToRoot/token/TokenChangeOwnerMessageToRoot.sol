pragma ton-solidity ^0.43.0;

import "../root/interfaces/IRootTokenChangeOwnerAddress.sol";
import "../../../TokenAddress.sol";

abstract contract TokenChangeOwnerMessageToRoot is TokenAddress {
    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwner(uint256 previousOwner, uint256 owner) override internal {
        IRootTokenChangeOwner(_root).tokenChangeOwner(_id, previousOwner, owner);
    }
}