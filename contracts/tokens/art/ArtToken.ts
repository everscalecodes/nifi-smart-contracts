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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "50cbca6f7542cd0180905522384a23e0fcf82da7ce9651c7e4e67601ad77ad69",
};
export default ArtTokenContract;