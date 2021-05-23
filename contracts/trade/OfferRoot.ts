const OfferRootContract = {
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
                        "name": "creationAndStorageFee",
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
                        "name": "price",
                        "type": "uint128"
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
                    },
                    {
                        "name": "storageFee",
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
                    },
                    {
                        "name": "storageFee",
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
                    },
                    {
                        "name": "storageFee",
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
    tvc: "te6ccgECLwEACgQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCj/AIrtUyDjAyDA/+MCIMD+4wLyCy0FBC4C3o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfBsGAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAYEWCCCEBmToM67joDgIIIQN3BUCLuOgOAgghBUi/A8u46A4CCCEGYM6RG7joDgHREKBwIoIIIQYYAWF7rjAiCCEGYM6RG64wIJCANqMPhIbuMA0ds8IcD/jiAj0NMB+kAwMcjPhyDOcc8LYcjPk5gzpEYizxbNyXD7AN4w4wB/+GcsDCoDfjD4SG7jANHbPCPA/44pJdDTAfpAMDHIz4cgznHPC2HIz5OGAFheJM8LfyPPC38izwt/zclw+wDeXwPjAH/4ZywUKgRQIIIQN3iNn7rjAiCCEDeQ/ja64wIgghA91oD6uuMCIIIQVIvwPLrjAg8ODQsD1DD4SG7jANMf+ERYb3X4ZNGNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4RHBvcnBvcYBAb3T4ZNs8MSHA/44gI9DTAfpAMDHIz4cgznHPC2HIz5NSL8DyIs8Wzclw+wAsDCkABPhOA24w+Ehu4wDTf9HbPCHA/44gI9DTAfpAMDHIz4cgznHPC2HIz5L3WgPqIs8Wzclw+wDeMOMAf/hnLCsqA54w+Ehu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39GI+En4TscF8uvo+ABUcSDIz4WAygBzz0DOAfoCgGvPQMlw+wBfA+MAf/hnLCAqBEQw+Ehu4wDTH/hEWG91+GTRiIhwcPhEcG9ycG9xgEBvdPhkLC4uEAL62zxsRCTA/44rJtDTAfpAMDHIz4cgznHPC2HIz5Ld4jZ+Jc8UJM8UI88LfyLPC//NyXD7AI4/+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpyPhEbxXPCx8lzxQkzxQjzwt/Is8L/83J+ERvFPsA4l8E4wB/+GcXKgRQIIIQHCS2cLrjAiCCEC/A7UK64wIgghAz+ctLuuMCIIIQN3BUCLrjAhgWFRIDpjD4SG7jANMf+ERYb3X4ZNFwXyD4RHBvcnBvcYBAb3T4ZNs8bDMjwP+OKSXQ0wH6QDAxyM+HIM5xzwthyM+S3cFQIiTPC38jzwt/Is8Lf83JcPsALBQTAY6OPfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJM8LfyPPC38izwt/zcn4RG8U+wDiXwPjAH/4ZyoADPhP+FD4UQNOMPhIbuMA03/Tf9N/0Yj4SfhOxwXy6+j4ACL4bwH4cPhxMNs8f/hnLCAqA4Iw+Ehu4wDR2zwkwP+OKybQ0wH6QDAxyM+HIM5xzwthyM+SvwO1CiXPFCTPFCPPC38izwv/zclw+wDeXwTjAH/4ZywXKgIWiIhb+Er4S/hN+EIuLgT+MPhIbuMA+Ebyc3H4ZvpBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f1w1/ldTR0NN/3yDXSsABk9TR0N7UINdKwAGT1NHQ3tTU0V8yiPhFIG6SMHDe+EK68uhk+AAi+GoB+Gv4bDBTZogh+kJvE9cL/8MA8uvp+AAw+G5fNRsaHxkBIvgAIvhvAfhw+HFfCNs8f/hnKgAyTWV0aG9kIGZvciB0aGUgb3duZXIgb25seQF67UTQINdJwgGOMNP/0z/TANTU1NN/1NHQ+kDTf9N/03/R+HH4cPhv+G74bfhs+Gv4an/4aPhm+GP4Yo6A4hwDpvQFiPhqiPhriPhscPhtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G5w+G9w+HBw+HFwAYBA9A7yvdcL//hicPhjcPhmf/hoLi4uBE4gggoRm2m64wIgghAOdQa/uuMCIIIQEu4ASrrjAiCCEBmToM664wIoJiEeBGYw+Ehu4wD6QZXU0dD6QN/RiPhJ+E7HBfLr6CCIIfpCbxPXC//DAPLr6fgAMPhu2zx/+GcsIB8qADpNYW5hZ2VyIGFkZHJlc3MgY2FuJ3QgYmUgbnVsbAA2TWV0aG9kIGZvciB0aGUgbWFuYWdlciBvbmx5BMgw+Ehu4wD6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f1w0fldTR0NMf39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQiiNs8+FChtX/4UaG1fyK+8uxNLCUkIgL+2zz4UKG1f234QsjL/3BYgED0Q/gocViAQPQW+E3Iy39yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0FMgyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFiLPFM+DyM+QqTRzxirPFsgqzxYpzwt/+FHPC38ozwsfzSQjAXrNyXD7ADEzW/hNpLV/+G1sQSHA/44gI9DTAfpAMDHIz4cgznHPC2HIz5JLuAEqIs8Wzclw+wDeMNs8f/hnKgAYcGim+2CVaKb+YDHfACZJbnZhbGlkIHByaWNlIHZhbHVlA3ww+Ehu4wDR2zwhwP+OKSPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAjnUGv4zxYhzxTJcPsA3jDjAH/4ZywnKgEIiDD4TC4D3DD4SG7jANMf+ERYb3X4ZNN/0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhEcG9ycG9xgEBvdPhkIds8MTEhwP+OICPQ0wH6QDAxyM+HIM5xzwthyM+SCEZtpiLPFs3JcPsALCspAXqONPhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfIs8Wzcn4RG8U+wDiMOMAf/hnKgBq+Eb4Q/hCyMv/yz/LAPhKzxT4S88U+EzPFPhNzwt/+E7IzvhPzwt/+FDPC3/4Uc8Lf83J7VQAyI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG34QsjL/3BYgED0Q/gocViAQPQWIsjLf3JYgED0Q8j0AMn4TMjPhID0APQAz4HJIPkAyM+KAEDL/8nQbBIBMDEAZu1E0NP/0z/TANTU1NN/1NHQ+kDTf9N/03/R+HH4cPhv+G74bfhs+Gv4an/4aPhm+GP4YgEK9KQg9KEuAAA=",
    code: "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",
    codeHash: "9fe902a694fd9176ba3275bfe36eb9a53eac957e3ccb511774d9ebcada4f496f",
};
export default OfferRootContract;