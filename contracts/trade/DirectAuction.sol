pragma ton-solidity >= 0.44.0;

interface IArtToken {
    function unlock() external;
    function changeOwner(address owner) external;
}

contract DirectAuction {
    struct Bid{
        address bider;
        uint128 value;
    }

    uint32 _starTime;
    uint32 _endTime;

    uint128 _startBid;
    uint128 _stepBid;
    Bid _curBid;
    uint128 _feeBid;

    address _token;
    address _creator;

    address static _root;
    uint128 static _id;

    //events
    event BidEvent(uint128 id, address creator, address bider, uint128 value);
    event FinishEvent(uint128 id, address creator, address bider, address token);

    //modifier
    modifier onlyRoot() {
        require(msg.sender == _root, 103, "Method for the root only");
        _;
    }

    modifier validBid() {
        require((msg.value - _feeBid >= _startBid) && (msg.value - _feeBid >= _curBid.value + _stepBid), 104, "Too low bid");
        _;
    }

    modifier validTime() {
        require((now>=_starTime) && (now<_endTime), 105, "Auction not still started or already finished");
        _;
    }

    modifier auctionFinished() {
        require(now>_endTime, 106, "Auction not finished");
        _;
    }


    constructor(
        address creator,
        address token,
        uint128 startBid,
        uint128 stepBid,
        uint128 feeBid,
        uint32 startTime,
        uint32 endTime
    ) public onlyRoot {
        _creator = creator;
        _token = token;
        _startBid = startBid;
        _stepBid = stepBid;
        _feeBid = feeBid;
        _starTime = startTime;
        _endTime = endTime;
    }

    function bid() public validTime validBid {
         if (_curBid.bider != address(0)) {
            _curBid.bider.transfer({value: _curBid.value, flag: 1, bounce: true});
        }
        _curBid.value = msg.value - _feeBid;
        _curBid.bider = msg.sender;
        emit BidEvent(_id, _creator, _curBid.bider, _curBid.value).extAddr(_root);
    }

    function finish() public auctionFinished {
        tvm.accept();
        if (_curBid.bider != address(0)) {
            IArtToken(_token).changeOwner(_curBid.bider);
            IArtToken(_token).unlock();
        }
        emit FinishEvent(_id, _creator, _curBid.bider, _token).extAddr(_root);
        selfdestruct(_creator);

    }

    function getInfo() public view returns(uint32 starTime,uint32 endTime, uint128 startBid, uint128 stepBid, Bid curBid,
                                           uint128 feeBid, address token, address creator, address root, uint128 id)
    {
        starTime = _starTime;
        endTime = _endTime;
        startBid = _startBid;
        stepBid = _stepBid;
        curBid = _curBid;
        feeBid = _feeBid;
        token = _token;
        creator = _creator;
        root = _root;
        id = _id;
    }

}
