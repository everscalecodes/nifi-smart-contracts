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
    codeHash: "1bc61a8fa6350cf790245c2d9bafddc9a2abf679d6becf1a21149d233b50f43d",
};
export default OfferContract;