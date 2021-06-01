pragma ton-solidity >= 0.44.0;

import "../abstract/interfaces/IToken.sol";
import "../abstract/interfaces/ITokenAddress.sol";
import "../abstract/modifiers/Accept.sol";

/**
 * Error codes
 *     100 - Method for the root only
 *     101 - Too low bid
 *     102 - Auction not still started or already finished
 *     103 - Auction not finished
 */
contract DirectAuction is Accept {
    /**********
     * EVENTS *
     **********/
    event BidEvent(uint128 id, address creator, address token, address bider, uint128 value);
    event FinishEvent(uint128 id, address creator, address token, address bider, uint128 value);



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

    uint32  private _startTime;
    uint32  private _endTime;

    uint128 private _startBid;
    uint128 private _stepBid;
    uint128 private _feeBid;
    Bid     private _curBid;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier validBid() {
        require(
            (msg.value - _feeBid >= _startBid) &&
            (msg.value - _feeBid >= _curBid.value + _stepBid),
            101,
            "Too low bid");
        _;
    }

    modifier validTime() {
        require((now >= _startTime) && (now < _endTime), 102, "Auction not still started or already finished");
        _;
    }

    modifier auctionFinished() {
        require(now >= _endTime, 103, "Auction not finished");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * creator ..... Address of auction creator.
     * token ....... Address of token contract.
     * startBid .... The minimum bid at which the auction starts.
     * stepBid ..... Minimum bet step.
     * feeBid ...... Commission that participants add to each bid to make the contract work.
     * startTime ... UNIX time. Auction start time.
     * endTime ..... UNIX time. Auction end time.
     */
    constructor(
        address creator,
        address token,
        uint128 startBid,
        uint128 stepBid,
        uint128 feeBid,
        uint32  startTime,
        uint32  endTime
    )
        public onlyRoot accept
    {
        _creator = creator;
        _token = token;
        _startBid = startBid;
        _stepBid = stepBid;
        _feeBid = feeBid;
        _startTime = startTime;
        _endTime = endTime;
    }



    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message from own wallet contract.
     */
    function bid() public validTime validBid {
         if (_curBid.bider != address(0))
            _curBid.bider.transfer({value: _curBid.value, flag: 1, bounce: true});

        _curBid.value = msg.value - _feeBid;
        _curBid.bider = msg.sender;
        emit BidEvent(_id, _creator, _token, _curBid.bider, _curBid.value);
    }

    /**
     * Everyone can call this method by external message.
     */
    function finish() public auctionFinished accept {
        if (_curBid.bider != address(0)) {
            ITokenAddress(_token).changeOwner(_curBid.bider);
        }

        IToken(_token).unlock();
        _root.transfer({value: address(this).balance/20, flag: 1, bounce: true});
        emit FinishEvent(_id, _creator, _token, _curBid.bider, _curBid.value);
        selfdestruct(_creator);
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * creator ..... Address of auction creator.
     * token ....... Address of token contract.
     * startBid .... The minimum bid at which the auction starts.
     * stepBid ..... Minimum bet step.
     * feeBid ...... Commission that participants add to each bid to make the contract work.
     * startTime ... UNIX time. Auction start time.
     * endTime ..... UNIX time. Auction end time.
     * curBid
     *   bider ..... Address of a participant.
     *   value ..... Bid value.
     */
    function getInfo() public view returns(
            address root,
            uint128 id,
            address creator,
            address token,
            uint128 startBid,
            uint128 stepBid,
            uint128 feeBid,
            uint32  startTime,
            uint32  endTime,
            Bid     curBid
        )
    {
        root = _root;
        id = _id;
        creator = _creator;
        token = _token;
        startTime = _startTime;
        endTime = _endTime;
        startBid = _startBid;
        stepBid = _stepBid;
        feeBid = _feeBid;
        curBid = _curBid;
    }
}
