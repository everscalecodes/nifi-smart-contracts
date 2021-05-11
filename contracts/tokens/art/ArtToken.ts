const ArtTokenContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
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
    codeHash: "712db3504efa77fd2c123d9e98bf18a14668de43a879ff626376e0303e6a4e8c",
};
export default ArtTokenContract;