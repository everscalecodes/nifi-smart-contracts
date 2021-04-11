pragma ton-solidity ^0.40.0;

import "../../abstract/Token.sol";
import "interfaces/IRandomToken.sol";

contract RandomToken is Token, IRandomToken {
    /*************
     * VARIABLES *
     *************/
    uint256 private _random;



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     */
    constructor(uint256 owner, address manager, uint32 managerUnlockTime) public Token(
            owner,
            manager,
            managerUnlockTime
        )
    {
        rnd.shuffle();
        _random = rnd.next();
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns the random generated number that is stored in the contract.
     * random ... Random generated number that is stored in the contract.
     */
    function receiveRandom() override external view responsible returns(uint256 random) {
        return{value: 0, bounce: false, flag: 64} getRandom();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns the random generated number that is stored in the contract.
     * random ... Random generated number that is stored in the contract.
     */
    function getRandom() public view returns(uint256 random) {
        random = _random;
    }
}