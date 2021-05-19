const TicketRootContract = {
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
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
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
                        "type": "address"
                    },
                    {
                        "name": "hash",
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
                "name": "tokenChangeOwner",
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
                "name": "receiveTicketInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getTicketInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
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
                "name": "getTokensIds",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "ids",
                        "type": "uint128[]"
                    }
                ]
            },
            {
                "name": "getSecretKey",
                "inputs": [],
                "outputs": [
                    {
                        "name": "key",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getHash",
                "inputs": [
                    {
                        "name": "key",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint128"
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
    codeHash: "7508d83b0d410ff49134011bfc6ec04ad2c618587b616a92d5b22c1cb54011c4",
};
export default TicketRootContract;