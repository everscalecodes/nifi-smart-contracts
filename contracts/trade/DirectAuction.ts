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
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
                    },
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
                        "name": "starTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
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
                        "name": "token",
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
                        "name": "token",
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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5dfe3f3efc9a71ede4f5feb4b4d903a02aa0de4500b9b854199cba897e21943c",
};
export default DirectAuctionContract;