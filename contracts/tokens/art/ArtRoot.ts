const ArtRootContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
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
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationFee",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
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
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "76bb0b397377142dfca238a586921c65e1f6f6fc49fa9cd2f840215f29c6eee8",
};
export default ArtRootContract;