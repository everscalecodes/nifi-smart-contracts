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
    codeHash: "a85bcb5d4a0cfe2fb8069199db4cd50618ebe4a4015a489b6675c4afb24d43ba",
};
export default ArtTokenContract;