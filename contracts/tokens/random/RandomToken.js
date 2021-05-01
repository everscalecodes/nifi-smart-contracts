const RandomTokenContract = {
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
                        "name": "owner",
                        "type": "uint256"
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
                "name": "receiveRandom",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getRandom",
                "inputs": [],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
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
                        "name": "publicKey",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "uint256"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
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
                        "name": "publicKey",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "uint256"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "lockManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "unlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "lock",
                "inputs": [
                    {
                        "name": "unlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "unlock",
                "inputs": [],
                "outputs": []
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
                "name": "ChangeOwnerEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "previousOwner",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "c8622a3de64f1ab36b89c13e532b92b3dc67a6c95c2b98dbdf1784c59c0346f0",
};
export default RandomTokenContract;