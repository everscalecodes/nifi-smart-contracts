const RandomRootContract = {
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
    codeHash: "cdeff947f551638ff70c9e3e4d24194d382e9659b7d4d8124a0239dcaa1bf722",
};
export default RandomRootContract;