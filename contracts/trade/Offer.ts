const OfferContract = {
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptOffer",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onReceiveInfo",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ],
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
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
                "name": "OfferCreated",
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "OfferAccepted",
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
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "OfferFinished",
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
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "11f21b34e084af71a67165e98b1cb16495fd673b7be212daa1eadc67e10a8b4b",
};
export default OfferContract;