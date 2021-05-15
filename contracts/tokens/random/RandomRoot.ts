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
    code: "te6ccgECLAEACYwABCj/AIrtUyDjAyDA/+MCIMD+4wLyCyoCASsC3o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfA8DAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAMEWCCCEBOynbO7joDgIIIQN5D+NruOgOAgghBUi/A8u46A4CCCEH+YICe7joDgGhEHBAIoIIIQZgzpEbrjAiCCEH+YICe64wIGBQOGMPhIbuMA0ds8IsD/ji4k0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAP+YICeM8WIs8LfyHPC3/JcPsA3lvjAH/4ZykiJwNqMPhIbuMA0ds8IcD/jiAj0NMB+kAwMcjPhyDOcc8LYcjPk5gzpEYizxbNyXD7AN4w4wB/+GcpCScEUCCCEDvyGsO64wIgghA91oD6uuMCIIIQQeZ1T7rjAiCCEFSL8Dy64wIMCwoIA9Qw+Ehu4wDTH/hEWG91+GTRjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+ERwb3Jwb3GAQG90+GTbPDEhwP+OICPQ0wH6QDAxyM+HIM5xzwthyM+TUi/A8iLPFs3JcPsAKQkmAAT4TgNCMPhIbuMA03/Tf9GI+En4TscF8uvo+AAB+G/4cNs8f/hnKRknA24w+Ehu4wDTf9HbPCHA/44gI9DTAfpAMDHIz4cgznHPC2HIz5L3WgPqIs8Wzclw+wDeMOMAf/hnKSgnBPww+Ehu4wD4RvJzcfhm+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf98g10rAAZPU0dDe1CDXSsABk9TR0N7U1NFfMoj4RSBukjBw3vhCuvLoZPgAIvhqAfhr+GwwU1WIIfpCbxPXC//DAPLr6fgAMPhuXyT4AAH4b/hwXwYPDhgNAQrbPH/4ZycAMk1ldGhvZCBmb3IgdGhlIG93bmVyIG9ubHkBcu1E0CDXScIBjizT/9M/0wDU1NTTf9TR0PpA03/Tf9H4cPhv+G74bfhs+Gv4an/4aPhm+GP4Yo6A4hADoPQFiPhqiPhriPhscPhtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G5w+G9w+HBwAYBA9A7yvdcL//hicPhjcPhmf/hoKysrBFAgghAZk6DOuuMCIIIQL8DtQrrjAiCCEDd4jZ+64wIgghA3kP42uuMCFxUTEgOeMPhIbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/RiPhJ+E7HBfLr6PgAVHEgyM+FgMoAc89AzgH6AoBrz0DJcPsAXwPjAH/4ZykZJwREMPhIbuMA0x/4RFhvdfhk0YiIcHD4RHBvcnBvcYBAb3T4ZCkrKxQC+ts8bEQkwP+OKybQ0wH6QDAxyM+HIM5xzwthyM+S3eI2fiXPFCTPFCPPC38izwv/zclw+wCOP/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJc8UJM8UI88LfyLPC//NyfhEbxT7AOJfBOMAf/hnFicDgjD4SG7jANHbPCTA/44rJtDTAfpAMDHIz4cgznHPC2HIz5K/A7UKJc8UJM8UI88LfyLPC//NyXD7AN5fBOMAf/hnKRYnAhaIiFv4SvhL+E34QisrBGYw+Ehu4wD6QZXU0dD6QN/RiPhJ+E7HBfLr6CCIIfpCbxPXC//DAPLr6fgAMPhu2zx/+GcpGRgnADpNYW5hZ2VyIGFkZHJlc3MgY2FuJ3QgYmUgbnVsbAA2TWV0aG9kIGZvciB0aGUgbWFuYWdlciBvbmx5BE4gggoRm2m64wIgghAOdQa/uuMCIIIQERo7j7rjAiCCEBOynbO64wIlIyAbBJIw+Ehu4wDT//pBldTR0PpA39cNH5XU0dDTH9/RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiNs8+E++8uxMKR8eHAL+2zz4UKG1f234QsjL/3BYgED0Q/gocViAQPQW+E3Iy39yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0FMgyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFiLPFM+DyM+R0zzPxijPC/8nzxYmzwsfzclw+wAxMjD4TR4dAWaktX/4bWwxIcD/jiAj0NMB+kAwMcjPhyDOcc8LYcjPkk7Kds4izxbNyXD7AN4w2zx/+GcnABhwaKb7YJVopv5gMd8AHk5lZWQgbW9yZSBtb25leQOuMPhIbuMA0x/4RFhvdfhk0XBw+ERwb3Jwb3GAQG90+GTbPGwiIsD/ji4k0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAJEaO4+M8WIs8LfyHPC3/JcPsAKSIhAYSOOfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfI88LfyLPC3/NyfhEbxT7AOJb4wB/+GcnAAj4T/hQA3ww+Ehu4wDR2zwhwP+OKSPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAjnUGv4zxYhzxTJcPsA3jDjAH/4ZykkJwEIiDD4TCsD3DD4SG7jANMf+ERYb3X4ZNN/0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhEcG9ycG9xgEBvdPhkIds8MTEhwP+OICPQ0wH6QDAxyM+HIM5xzwthyM+SCEZtpiLPFs3JcPsAKSgmAXqONPhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfIs8Wzcn4RG8U+wDiMOMAf/hnJwBg+Eb4Q/hCyMv/yz/LAPhKzxT4S88U+EzPFPhNzwt/+E7IzvhPzwt/+FDPC3/Nye1UAMiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARt+ELIy/9wWIBA9EP4KHFYgED0FiLIy39yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0GwSATAxAF7tRNDT/9M/0wDU1NTTf9TR0PpA03/Tf9H4cPhv+G74bfhs+Gv4an/4aPhm+GP4YgEK9KQg9KErAAA=",
    codeHash: "ccee88d66b7b17e8a748f7534eba58fe21bc87fa2e7f377e584582b201346623",
};
export default RandomRootContract;