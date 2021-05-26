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
    codeHash: "f4f9ab79ce9b4336ba2a2472b901575e1c1a7802817a7e04594ace52846ad4b2",
};
export default DirectAuctionContract;