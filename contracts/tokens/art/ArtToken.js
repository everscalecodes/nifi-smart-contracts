const ArtTokenContract = {
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
                    },
                    {
                        "name": "creator",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "hashesCount",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "addHash",
                "inputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getArtInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "hashesCount",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getHashes",
                "inputs": [
                    {
                        "name": "offset",
                        "type": "uint32"
                    },
                    {
                        "name": "length",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "hashes",
                        "type": "uint256[]"
                    },
                    {
                        "name": "hashesCount",
                        "type": "uint32"
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
    codeHash: "74ef83b4ce9fb87bab7d4e970026a5f77b314f8038bb9ecf2d0130061649396b",
};
export default ArtTokenContract;