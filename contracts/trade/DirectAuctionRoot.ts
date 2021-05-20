const DirectAuctionRootContract = {
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
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
    codeHash: "0013c46775bc7d7867a071206e4fd2d25743f21b4df6e2464438e1e144ffec7f",
};
export default DirectAuctionRootContract;