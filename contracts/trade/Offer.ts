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
                        "name": "fee",
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
                        "name": "fee",
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
    codeHash: "21b8ccd98e5956124ed62bd0febee1f8cd90a704a0f800e78d63334cae8624df",
};
export default OfferContract;