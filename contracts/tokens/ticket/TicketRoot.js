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
    code: "te6ccgECSgEADjwABCj/AIrtUyDjAyDA/+MCIMD+4wLyC0gCAUkC3o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfD4DAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAMEWCCCEA1mbWG7joDgIIIQGZOgzruOgOAgghBB5nVPu46A4CCCEH+YICe7joDgLxsOBANAIIIQXjFhn7uOgOAgghBmDOkRu46A4CCCEH+YICe64wIKBgUDhjD4QW7jANHbPCLA/44uJNDTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAD/mCAnjPFiLPC38hzwt/yXD7AN5b4wB/+GdHIUUCKCCCEF6EeYm64wIgghBmDOkRuuMCCAcDfDD4QW7jANHbPCHA/44pI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADmDOkRjPFiHPFslw+wDeMOMAf/hnRw1FAnQw0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAN6EeYmM8WIc8Lf8lw+wDeMOMAf/hnCUUAPHD4JfgV+BCCcQAAAAAAAAAAAAAAAAAAAACpCLV/MQIoIIIQVIvwPLrjAiCCEF4xYZ+64wIMCwOQMPhBbuMA0ds8I8D/jjIl0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAN4xYZ+M8WI88LfyLPCx8hzwsfyXD7AN5fA+MAf/hnRyRFA+Yw+EFu4wDTH/hEWG91+GTRjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+ERwb3Jwb3GAQG90+GTbPDEhwP+OKSPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA1IvwPIzxYhzxbJcPsARw1EAAT4TgNAIIIQN3iNn7uOgOAgghA91oD6u46A4CCCEEHmdU+64wIVEA8DQjD4QW7jANN/03/RiPhJ+E7HBfLr6PgAAfhv+HDbPH/4Z0cdRQIoIIIQN5D+NrrjAiCCED3WgPq64wISEQOAMPhBbuMA03/R2zwhwP+OKSPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAvdaA+ozxYhzxbJcPsA3jDjAH/4Z0dGRQQmMPhBbuMA+kDXDX+K39cMAIrf0Uc9FBMCVoj4SfhOxwXy6+j4AFRxIMjPhYDKAHPPQM4B+gKAa89AyXD7AF8D4wB/+GcdRQAK1NHQ0gACKCCCEC/A7UK64wIgghA3eI2fuuMCGRYERDD4QW7jANMf+ERYb3X4ZNGIiHBw+ERwb3Jwb3GAQG90+GRHSUkXAv7bPGxEJMD/jjQm0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAALd4jZ+M8WJM8UI88UIs8LfyHPC//JcPsAjj34RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfJM8UI88UIs8LfyHPC//J+ERvFPsA4l8EGhgBCuMAf/hnRQOUMPhBbuMA0ds8JMD/jjQm0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAK/A7UKM8WJM8UI88UIs8LfyHPC//JcPsA3l8E4wB/+GdHGkUCFoiIW/hK+Ev4TfhCSUkDQCCCEA51Br+7joDgIIIQERo7j7uOgOAgghAZk6DOuuMCJR4cBFgw+EFu4wD6QNGI+En4TscF8uvoIIgh+kJvE9cL/8MA8uvp+AAw+G7bPH/4Z0cdOkUANk1ldGhvZCBmb3IgdGhlIG1hbmFnZXIgb25seQIoIIIQDwI4abrjAiCCEBEaO4+64wIiHwOuMPhBbuMA0x/4RFhvdfhk0XBw+ERwb3Jwb3GAQG90+GTbPGwiIsD/ji4k0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAJEaO4+M8WIs8LfyHPC3/JcPsARyEgAYCON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx8izwt/Ic8Lf8n4RG8U+wDiW+MAf/hnRQAI+E/4UAO4MPhBbuMA0x/4RFhvdfhk0XBfIPhEcG9ycG9xgEBvdPhk2zxsMyPA/44yJdDTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACPAjhpjPFiPPC38izwsfIc8LH8lw+wBHJCMBio47+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LHyPPC38izwsfIc8LH8n4RG8U+wDiXwPjAH/4Z0UADPhR+FL4UwIoIIIQDdgKX7rjAiCCEA51Br+64wIoJgN8MPhBbuMA0ds8IcD/jikj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI51Br+M8WIc8UyXD7AN4w4wB/+GdHJ0UBCIgw+ExJBHYw+EFu4wD6QNcNf4rf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIj4TfhRufLv0Uc9LikE7IjbPPhPvvLsTNs8+FChtX9t+ELIy/9wWIBA9EP4KHFYgED0FvhNyMt/cliAQPRDyPQAyfhMyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBTIMjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxYizxTPg8jPkPFiXL4nzxYtLCwqAeaNCGAAAACIiRERmZoiIqqrMzO7vEREzM1VVd3eZmbu73d3//zPFnDPCx8mzwt/+FLPCx/4U88LH83JcPsAMTIj+FRcgQEL9AqS9AWRbeL4TQF/yMoAWYEAgPRDyPQAWYEBC/RB+HQw+E2ktX/4bWwhIcD/KwFkjikj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI3YCl+M8WIc8WyXD7AN4w2zx/+GdFABhwaKb7YJVopv5gMd8AHk5lZWQgbW9yZSBtb25leQAaTGltaXQgaXMgb3ZlcgNAIIIQCT7zh7uOgOAgghANDcL8u46A4CCCEA1mbWG64wJANDAEJjD4QW7jANN/+kGK3/pBit/RUyJHMzMxA7TbPIgh+EnHBfLv0CP4VFyBAQv0CpL0BZFt4icBgQCA9FswyPQAWYEBC/RBIPh0IwFcgQEL9AqS9AWRbeInAX/IygBZgQCA9EPI9ABZgQEL9EH4dF8F2zx/+GdGMkUAKk1ldGhvZCBmb3IgdG9rZW4gb25seQAK1NHQ+kACKCCCEAmZz+a64wIgghANDcL8uuMCNzUDijD4QW7jAPpA0ds8IcD/ji4j0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI0NwvyM8WIW8iAssf9ADJcPsA3jDjAH/4Z0c2RQDScG1vAo5hIfhUgQEL9AogkTHe3SH4VIEBC/QKkvQFkW3iXyCBAID0hpUgWNcKAJNtbW3ikyJus44rII4TU1HIy38BbyIhpANZgCD0Q28CNt5TI4EAgPR8lSBY1woAk21tbeJsM+hfBdgxBDgw+EFu4wD4RvJzcfhm+kDXDX+K39cNf4rf1w1/Pj09OARMit/XDR+K39cNH4rfINdKwAGT1NHQ3tQg10rAAZPU0dDe1NTRXzI9PDw5A5KI+EUgbpIwcN74Qrry6GT4ACL4agH4a/hsMFOIiCH6Qm8T1wv/wwDy6+n4ADD4bl8n+AAB+G/4cF8DIvhxAfhy+HNfBNs8f/hnOzpFADpNYW5hZ2VyIGFkZHJlc3MgY2FuJ3QgYmUgbnVsbAAyTWV0aG9kIGZvciB0aGUgb3duZXIgb25seQAK1NHQ0x8ACtTR0NN/AY7tRNAg10nCAY460//TP9MA1dN/0x/TH/QF+HT4c/hy+HHU1NTTf/pA03/XC3/4cPhv+G74bfhs+Gv4an/4Yfhm+GP4Yo6A4j8DuPQFiPhqiPhriPhscPhtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G5w+G9w+HBw+HFw+HJw+HNt+HRwAYBA9A7yvdcL//hicPhjcPhmf/hhSUlJAiYgggoRm2m64wIgghAJPvOHuuMCQ0ECeDDTf9HbPCHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACJPvOHjPFiHPC3/JcPsA3jDjAH/4Z0JFAFBwyFMCzwt/MSDJIPkAgnEAAAAAAAAAAAAAAAAAAAAAqQi1f2wTWVsxA+4w+EFu4wDTH/hEWG91+GTTf9GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4RHBvcnBvcYBAb3T4ZCHbPDExIcD/jikj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIIRm2mM8WIc8WyXD7AEdGRAF2jjL4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfIc8WyfhEbxT7AOIw4wB/+GdFAIL4QsjL//hDzws/+EbPCwDI+FH4UvhT+FReMMt/yx/LH/QA+Er4S/hM+E34TvhP+FBecM8RzMzMy3/Oy3/Lf8ntVADIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbfhCyMv/cFiAQPRD+ChxWIBA9BYiyMt/cliAQPRDyPQAyfhMyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBsEgEwMQB67UTQ0//TP9MA1dN/0x/TH/QF+HT4c/hy+HHU1NTTf/pA03/XC3/4cPhv+G74bfhs+Gv4an/4Yfhm+GP4YgEK9KQg9KFJAAA=",
    codeHash: "c69760a1a122a8889b686407ab7b4f03193eff1750ef07bdf55fbce5a4cbfcd6",
};
export default TicketRootContract;