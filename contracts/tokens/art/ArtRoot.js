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
    codeHash: "3ecdc02e15fe64f132cf6cbb6f467790764e51197c29e10414f8e8ca1c8c032c",
};
export default ArtRootContract;