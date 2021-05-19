pragma ton-solidity ^0.43.0;

import "../root/interfaces/IRootTokenChangeOwnerAddress.sol";
import "../../../TokenAddress.sol";

abstract contract TokenChangeOwnerAddressMessageToRoot is TokenAddress {
    /**
     * Call after change of address of token owner.
     * previousOwner ... Previous public key of token owner.
     * owner ........... New public key of token owner.
     */
    function _onChangeOwner(address previousOwner, address owner) override internal {
        IRootTokenChangeOwnerAddress(_root).tokenChangeOwner{value: 0, bounce: true, flag: 64}(
            _id,
            previousOwner,
            owner
        );
    }
}