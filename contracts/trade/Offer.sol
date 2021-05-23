pragma ton-solidity >= 0.44.0;

import "../abstract/interfaces/IToken.sol";
import "../abstract/interfaces/ITokenAddress.sol";
import "../abstract/modifiers/Accept.sol";

/**
 * Error codes
 *     100 - Method for the root only
 *     101 - Method for the token only
 *     102 - Recive only inner message
 *     103 - Offer already finished
 *     104 - Offer not finished
 *     105 - Need more than 0.5 ton for operation
 *     106 - Wrong manager
 *     107 - Wrong manager unlock time
 */
contract Offer is Accept {
    /**********
     * EVENTS *
     **********/
    event OfferCreated(uint128 id, address creator, address token, uint128 price);
    event OfferAccepted(uint128 id, address creator, address token, uint128 price);
    event OfferFinished(uint128 id, address creator, address token, uint128 price);
    


    /**************
     * STRUCTURES *
     **************/
    struct Bid {
        address bider;
        uint128 value;
    }



    /**********
     * STATIC *
     **********/
    address static _root;
    uint128 static _id;



    /*************
     * VARIABLES *
     *************/
    address private _creator;
    address private _token;

    uint32  private _endTime;

    uint128 private _price;
    uint128 private _fee;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier onlyToken() {
        require(msg.sender == _token, 101, "Method for the token only");
        _;
    }

    modifier onlyInnerMsg() {
        require(msg.sender.value != 0, 102, "Recive only inner message");
        _;
    }

    modifier validTime() {
        require(now < _endTime, 103, "Offer already finished");
        _;
    }

    modifier offerFinished() {
        require(now >= _endTime+3600, 104, "Offer not finished");
        _;
    }

    modifier checkValue() {
        require(msg.value > 0.5 ton, 105, "Need more than 0.5 ton for operation");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * creator ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * stepBid ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    constructor(
        address creator,
        address token,
        uint128 price,
        uint128 fee,
        uint32  endTime
    )
        public onlyRoot accept
    {
        _creator = creator;
        _token = token;
        _price = price;
        _fee = fee;
        _endTime = endTime;
        emit OfferCreated(_id, _creator, _token, _price).extAddr(_root);
    }



    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message.
     */
    function acceptOffer() public view onlyInnerMsg validTime checkValue {        
        ITokenAddress(_token).receiveInfo{value: 0, bounce: false, flag: 64, callback: Offer.onReceiveInfo}();        
    }

    /**
     * Only token can call this method by internal message.
     */
    function onReceiveInfo(address root,
            uint128 id,
            uint256 publicKey,
            address owner,
            address manager,
            uint32  managerUnlockTime
    ) public onlyToken {
        require(manager == address(this), 106, "Wrong manager");
        require(managerUnlockTime > _endTime+3600, 107, "Wrong manager unlock time");

        ITokenAddress(_token).changeOwner(_creator);
        IToken(_token).unlock();

        emit OfferAccepted(_id, _creator, _token, _price).extAddr(_root);
        selfdestruct(owner);
    }

    /**
     * Everyone can call this method by external message.
     */
    function finish() public offerFinished accept {
        emit OfferFinished(_id, _creator, _token, _price).extAddr(_root);
        selfdestruct(_creator);
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * creator ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * stepBid ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    function getInfo() public view returns(
            address root,
            uint128 id,
            address creator,
            address token,
            uint128 price,
            uint128 fee,
            uint32  endTime
        )
    {
        root = _root;
        id = _id;
        creator = _creator;
        token = _token;
        price = _price;
        fee = _fee;
        endTime = _endTime;       
    }
}
