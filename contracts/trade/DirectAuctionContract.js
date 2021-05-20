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
    codeHash: "7dadec673f05af56b514f7c09f79d5c6b1849cdad7fbdc10cb98c5b2c44f6da2",
};
module.exports = { DirectAuctionContract };