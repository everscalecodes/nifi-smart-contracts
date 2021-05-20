const DirectAuctionContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "bid",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "finish",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "starTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "components": [
                            {
                                "name": "bider",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            }
                        ],
                        "name": "curBid",
                        "type": "tuple"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_id",
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "BidEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "bider",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FinishEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "bider",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "3ac4670f62c659896ee4b01e88227ceedd3c09779cbf0c52087ccc85b6346c79",
};
export default DirectAuctionContract;