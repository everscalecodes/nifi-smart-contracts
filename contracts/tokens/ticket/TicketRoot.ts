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
                        "name": "ownerAddress",
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
                "name": "tokenChangeOwnerAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "previousOwnerAddress",
                        "type": "address"
                    },
                    {
                        "name": "ownerAddress",
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
                        "name": "ownerAddress",
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
    code: "te6ccgECQgEADjQABCj/AIrtUyDjAyDA/+MCIMD+4wLyC0ACAUEC3o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfDYDAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAMEWCCCEA1mbWG7joDgIIIQGZOgzruOgOAgghBB5nVPu46A4CCCEH+YICe7joDgLBgOBANAIIIQXjFhn7uOgOAgghBmDOkRu46A4CCCEH+YICe64wIKBgUDhjD4SG7jANHbPCLA/44uJNDTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAD/mCAnjPFiLPC38hzwt/yXD7AN5b4wB/+Gc/Hj0CKCCCEF6EeYm64wIgghBmDOkRuuMCCAcDajD4SG7jANHbPCHA/44gI9DTAfpAMDHIz4cgznHPC2HIz5OYM6RGIs8Wzclw+wDeMOMAf/hnPw09AnQw0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAN6EeYmM8WIc8Lf8lw+wDeMOMAf/hnCT0APHD4JfgV+BCCcQAAAAAAAAAAAAAAAAAAAACpCLV/MQIoIIIQVIvwPLrjAiCCEF4xYZ+64wIMCwOQMPhIbuMA0ds8I8D/jjIl0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAN4xYZ+M8WI88LfyLPCx8hzwsfyXD7AN5fA+MAf/hnPyE9A9Qw+Ehu4wDTH/hEWG91+GTRjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+ERwb3Jwb3GAQG90+GTbPDEhwP+OICPQ0wH6QDAxyM+HIM5xzwthyM+TUi/A8iLPFs3JcPsAPw08AAT4TgNAIIIQN3iNn7uOgOAgghA91oD6u46A4CCCEEHmdU+64wITEA8DQjD4SG7jANN/03/RiPhJ+E7HBfLr6PgAAfhv+HDbPH/4Zz8aPQIoIIIQN5D+NrrjAiCCED3WgPq64wISEQNuMPhIbuMA03/R2zwhwP+OICPQ0wH6QDAxyM+HIM5xzwthyM+S91oD6iLPFs3JcPsA3jDjAH/4Zz8+PQOeMPhIbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/RiPhJ+E7HBfLr6PgAVHEgyM+FgMoAc89AzgH6AoBrz0DJcPsAXwPjAH/4Zz8aPQIoIIIQL8DtQrrjAiCCEDd4jZ+64wIWFAREMPhIbuMA0x/4RFhvdfhk0YiIcHD4RHBvcnBvcYBAb3T4ZD9BQRUC+ts8bEQkwP+OKybQ0wH6QDAxyM+HIM5xzwthyM+S3eI2fiXPFCTPFCPPC38izwv/zclw+wCOP/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJc8UJM8UI88LfyLPC//NyfhEbxT7AOJfBOMAf/hnFz0DgjD4SG7jANHbPCTA/44rJtDTAfpAMDHIz4cgznHPC2HIz5K/A7UKJc8UJM8UI88LfyLPC//NyXD7AN5fBOMAf/hnPxc9AhaIiFv4SvhL+E34QkFBA0AgghAOdQa/u46A4CCCEBEaO4+7joDgIIIQGZOgzrrjAiIbGQRmMPhIbuMA+kGV1NHQ+kDf0Yj4SfhOxwXy6+ggiCH6Qm8T1wv/wwDy6+n4ADD4bts8f/hnPxo0PQA2TWV0aG9kIGZvciB0aGUgbWFuYWdlciBvbmx5AiggghAPAjhpuuMCIIIQERo7j7rjAh8cA64w+Ehu4wDTH/hEWG91+GTRcHD4RHBvcnBvcYBAb3T4ZNs8bCIiwP+OLiTQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAkRo7j4zxYizwt/Ic8Lf8lw+wA/Hh0BhI45+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpyPhEbxXPCx8jzwt/Is8Lf83J+ERvFPsA4lvjAH/4Zz0ACPhP+FADuDD4SG7jANMf+ERYb3X4ZNFwXyD4RHBvcnBvcYBAb3T4ZNs8bDMjwP+OMiXQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAjwI4aYzxYjzwt/Is8LHyHPCx/JcPsAPyEgAY6OPfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJM8LfyPPCx8izwsfzcn4RG8U+wDiXwPjAH/4Zz0ADPhR+FL4UwIoIIIQDdgKX7rjAiCCEA51Br+64wIlIwN8MPhIbuMA0ds8IcD/jikj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI51Br+M8WIc8UyXD7AN4w4wB/+Gc/JD0BCIgw+ExBBJAw+Ehu4wD6QZXU0dD6QN/XDX+V1NHQ03/f0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIj4TfhRufLv0Yg/KyomA+rbPPhPvvLsTNs8+FChtX9t+ELIy/9wWIBA9EP4KHFYgED0FvhNyMt/cliAQPRDyPQAyfhMyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBTIMjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxYizxTPg8jPkPFiXL4nzxYpKScB6I0IYAAAAIiJERGZmiIiqqszM7u8RETMzVVV3d5mZu7vd3f//MjOgCDPQCfPC3/4Us8LH/hTzwsfzc3JcPsAMTIj+FRcgQEL9AqS9AWRbeL4TQF/yMoAWYEAgPRDyPQAWYEBC/RB+HQw+E2ktX/4bWwhIcD/KAFSjiAj0NMB+kAwMcjPhyDOcc8LYcjPkjdgKX4izxbNyXD7AN4w2zx/+Gc9ABhwaKb7YJVopv5gMd8AHk5lZWQgbW9yZSBtb25leQAaTGltaXQgaXMgb3ZlcgNAIIIQCT7zh7uOgOAgghANDcL8u46A4CCCEA1mbWG64wI4Ly0E7jD4SG7jANN/+kGV1NHQ+kDf+kGV1NHQ+kDf0VMi2zyIIfhJxwXy79Aj+FRcgQEL9AqS9AWRbeInAYEAgPRbMMj0AFmBAQv0QSD4dCMBXIEBC/QKkvQFkW3iJwF/yMoAWYEAgPRDyPQAWYEBC/RB+HRfBds8f/hnPz4uPQAqTWV0aG9kIGZvciB0b2tlbiBvbmx5AiggghAJmc/muuMCIIIQDQ3C/LrjAjIwA5gw+Ehu4wD6QZXU0dD6QN/R2zwhwP+OLiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAjQ3C/IzxYhbyICyx/0AMlw+wDeMOMAf/hnPzE9ANJwbW8CjmEh+FSBAQv0CiCRMd7dIfhUgQEL9AqS9AWRbeJfIIEAgPSGlSBY1woAk21tbeKTIm6zjisgjhNTUcjLfwFvIiGkA1mAIPRDbwI23lMjgQCA9HyVIFjXCgCTbW1t4mwz6F8F2DEE/jD4SG7jAPhG8nNx+Gb6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf9/XDR+V1NHQ0x/f1w0fldTR0NMf3yDXSsABk9TR0N7UINdKwAGT1NHQ3tTU0V8yiPhFIG6SMHDe+EK68uhk+AAi+GoB+Gv4bDBTiIg2NTQzAVgh+kJvE9cL/8MA8uvp+AAw+G5fJ/gAAfhv+HBfAyL4cQH4cvhzXwTbPH/4Zz0AOk1hbmFnZXIgYWRkcmVzcyBjYW4ndCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5AZjtRNAg10nCAY4/0//TP9MA1NTU03/U0dD6QNN/03/Tf9Mf1NHQ0x/0BNH4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hijoDiNwO49AWI+GqI+GuI+Gxw+G2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bnD4b3D4cHD4cXD4cnD4c234dHABgED0DvK91wv/+GJw+GNw+GZ/+GhBQUECJiCCChGbabrjAiCCEAk+84e64wI7OQJ4MNN/0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIk+84eM8WIc8Lf8lw+wDeMOMAf/hnOj0ASnAhyMt/IMkg+QCCcQAAAAAAAAAAAAAAAAAAAACpCLV/bBNZWzED3DD4SG7jANMf+ERYb3X4ZNN/0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhEcG9ycG9xgEBvdPhkIds8MTEhwP+OICPQ0wH6QDAxyM+HIM5xzwthyM+SCEZtpiLPFs3JcPsAPz48AXqONPhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfIs8Wzcn4RG8U+wDiMOMAf/hnPQCK+Eb4Q/hCyMv/yz/LAPhKzxT4S88U+EzPFPhNzwt/+E7IzvhPzwt/+FDPC3/4Uc8Lf/hSzwsf+FPIyx/4VAH0AM3Nye1UAMiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARt+ELIy/9wWIBA9EP4KHFYgED0FiLIy39yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0GwSATAxAITtRNDT/9M/0wDU1NTTf9TR0PpA03/Tf9N/0x/U0dDTH/QE0fh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GIBCvSkIPShQQAA",
    codeHash: "70f6cb4cee787308bb4ed5c89df5b70c394d6e4028b757f21ce8e3350c3aaf5b",
};
export default TicketRootContract;