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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
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
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "te6ccgECLwEACdAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCj/AIrtUyDjAyDA/+MCIMD+4wLyCy0GBC4BAAUC+o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjhqBAgDXGCD5AQHTAAGU0/8DAZMC+ELi+RDyqJXTAAHyeuLTPwGOHfhDIbkgnzAg+COBA+iogggbd0Cgud6TIPhj4PI02DDTHwHbPPhHbvJ8KgcBaiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHANwh1w0f8rwh3QHbPPhHbvJ8BwRYIIIQH3LCXruOgOAgghAzu772u46A4CCCEE3rxoS7joDgIIIQXMTmtruOgOAfEw0IAiggghBTrS0nuuMCIIIQXMTmtrrjAgsJAzYw+Ehu4wDRiPhJ+EzHBfLoZfgAcPht2zx/+GckCicANk1ldGhvZCBmb3IgdGhlIG1hbmFnZXIgb25seQRaMPhIbuMA0x/RiNs8IJYw+CP4Tb7eII4QMPhJ+EzHBSCWMPgj+E253t/y6GYgJB4dDAIkiPgjIrny6Gr4ADD4bds8f/hnEicDPCCCEEVkPGi64wIgghBJ68IUuuMCIIIQTevGhLrjAhAPDgOYMPhIbuMA0ds8JsD/jjYo0NMB+kAwMcjPhyDOcc8LYcjPkzevGhInzxYmzwt/Jc8L/8glzxbIJc8WJM8LH83Nzclw+wDeXwbjAH/4ZyQXJwSiMPhIbuMA1w3/ldTR0NP/39GI2zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZvgA+FEhyMv/AW8iIaQDWYAg9ENvAvhxMNs8f/hnJB4dJwR8MPhIbuMA+kGV1NHQ+kDf1w0fldTR0NMf39GI2zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZiEkHh0RA0iIIfpCbxPXC//DAPLoySGI+CMiufLoavgAWwH4bPht2zx/+GcoEicAIkludmFsaWQgbG9jayB0aW1lAzwgghAhezMIuuMCIIIQJevd67rjAiCCEDO7vva64wIaGBQC/jD4SG7jANMf+ERYb3X4ZNGNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAkFQKa+ERwb3Jwb3GAQG90+GTbPGxmJsD/jjYo0NMB+kAwMcjPhyDOcc8LYcjPks7u+9onzxYmzwt/Jc8L/8glzxbIJc8WJM8LH83Nzclw+wAXFgGojkr4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2nI+ERvFc8LHyfPFibPC38lzwv/yCXPFsglzxYkzwsfzc3NyfhEbxT7AOJfBuMAf/hnJwAY+Er4S/hC+E74TPhNA5Yw+Ehu4wDTH9Mf0ds8IsD/jjIk0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAKXr3euM8WIm8iAssf9AAhzwsfyXD7AN5b4wB/+GckGScAhnBtbwJw+FEgbxC1HzJfJKC1HyK2CSWTUwG5jiJUdAJvEYAg9A7ystcL/8jL/wFvIiGkA1mAIPRDbwI1pLUf6F8DbCIEaDD4SG7jAPpBldTR0PpA39GI2zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZiAkHh0bBESIIfpCbxPXC//DAPLoyds8+AD4TiL4blMC2zxfA9s8f/hnKC4cJwBK+ErIz4cgznHPC2HIz5CDyITe+EvPC38jzxbII88Wzc3JcPsAWwAM+En4TscFAEhNZXRob2QgZm9yIHRoZSBvd25lciBvciBtYW5hZ2VyIG9ubHkDPCCCEA3M8Oi64wIgghATgXUxuuMCIIIQH3LCXrrjAiUiIAP0MPhIbuMA0x/4RFhvdfhk0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBfIPhEcG9ycG9xgEBvdPhk2zxsRCTA/44sJtDTAfpAMDHIz4cgznHPC2HIz5J9ywl6Jc8WJM8LHyPPC/8izwsfzclw+wAkIyEBlI5A+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpyPhEbxXPCx8lzxYkzwsfI88L/yLPCx/NyfhEbxT7AOJfBOMAf/hnJwOEMPhIbuMA0ds8JMD/jiwm0NMB+kAwMcjPhyDOcc8LYcjPkk4F1MYlzxYkzwsfI88L/yLPCx/NyXD7AN5fBOMAf/hnJCMnAIiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwIPhPM/hQMvhRbxC1HyCltR/4UW8RgCD0DvKy1wv/MgCE7UTQ0//TP9MA+kDU0dDTf/pA0x/U0dD6QNTR0PpA0x/TH/QEWW8CAdH4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hiBNgw+Ehu4wD4RvJzcfhm+kGV1NHQ+kDf+kGV1NHQ+kDf1w0fldTR0NMf3/pBldTR0PpA39cNH5XU0dDTH9/XDf+V1NHQ0//f0V81XIj4SfhKxwXy6GchiCH6Qm8T1wv/wwDy6Mn4ADAB+Gz4bSIqKSgmAmiIIfpCbxPXC//DAPLoyV8D+G4i+G8h+HD4USHIy/8BbyIhpANZgCD0Q28C+HFfBts8f/hnKCcAdvhG+EP4QsjL/8s/ywD4Ss8W+EvIy3/4TM8W+E3PCx/4TsjO+E/IzvhQzwsf+FFvIgLLH/QAzc3Nye1UACpBZGRyZXNzIGNhbid0IGJlIG51bGwAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQGY7UTQINdJwgGOP9P/0z/TAPpA1NHQ03/6QNMf1NHQ+kDU0dD6QNMf0x/0BFlvAgHR+HH4cPhv+G74bfhs+Gv4an/4aPhm+GP4Yo6A4isB0vQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wt/kXDi+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bHD4bSwA1o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G9w+HBwbW8C+HFwAYBA9A7yvdcL//hicPhjcPhmf/hoAQr0pCD0oS4AAA==",
    code: "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",
    codeHash: "390cb1a8c8f06e4b388e07ad8640900c89f4d4c4363706a24c652ccff924c4f0",
};
export default ArtTokenContract;