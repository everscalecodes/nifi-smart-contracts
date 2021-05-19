const TicketTokenContract = {
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
                        "name": "hash",
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
                ],
                "outputs": []
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
                        "name": "hash",
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
                "name": "setHash",
                "inputs": [
                    {
                        "name": "hash",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getTicketInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "hash",
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
        "events": []
    },
    tvc: "te6ccgECLQEACHoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCj/AIrtUyDjAyDA/+MCIMD+4wLyCysFBCwC1o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABn4ECANcYIPkBWPhC+RDyqN7TPwGOHfhDIbkgnzAg+COBA+iogggbd0Cgud6TIPhj4PI02DDTHwHbPPhHbvJ8FQYBaiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHANwh1w0f8rwh3QHbPPhHbvJ8BgRWIIIQIXszCLuOgOAgghBFZDxou46A4CCCEFzE5ra7joDgIIIQXjFhn7rjAhwOCAcDkDD4SG7jANHbPCPA/44yJdDTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADeMWGfjPFiPPC38izwsfIc8LH8lw+wDeXwPjAH/4ZyopKAM8IIIQTevGhLrjAiCCEFOtLSe64wIgghBcxOa2uuMCDQsJAzYw+Ehu4wDRiPhJ+EzHBfLoZfgAcPht2zx/+GcqCigANk1ldGhvZCBmb3IgdGhlIG1hbmFnZXIgb25seQRaMPhIbuMA0x/RiNs8IJYw+CP4Tb7eII4QMPhJ+EzHBSCWMPgj+E253t/y6GYgKiUkDAIkiPgjIrny6Gr4ADD4bds8f/hnESgDmDD4SG7jANHbPCbA/442KNDTAfpAMDHIz4cgznHPC2HIz5M3rxoSJ88WJs8LfyXPC//IJc8WyCXPFiTPCx/Nzc3JcPsA3l8G4wB/+GcqGygDPCCCEDO7vva64wIgghA8WJcvuuMCIIIQRWQ8aLrjAhgSDwR8MPhIbuMA+kGV1NHQ+kDf1w0fldTR0NMf39GI2zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZiEqJSQQA0iIIfpCbxPXC//DAPLoySGI+CMiufLoavgAWwH4bPht2zx/+GciESgAIkludmFsaWQgbG9jayB0aW1lBNow+Ehu4wD4RvJzcfhm+kGV1NHQ+kDf+kGV1NHQ+kDf1w0fldTR0NMf39cNf5XU0dDTf9/XDR+V1NHQ0x/f1w0fldTR0NMf39FfNVyI+En4SscF8uhnIYgh+kJvE9cL/8MA8ujJ+AAwAfhs+G0iFRQiEwJCiCH6Qm8T1wv/wwDy6MlfA/huIvhvAfhw+HFfBNs8f/hnIigAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQGG7UTQINdJwgGONtP/0z/TAPpA1NHQ03/6QNMf1NHQ+kDTf9Mf0x/R+HH4cPhv+G74bfhs+Gv4an/4aPhm+GP4Yo6A4hYB0vQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wt/kXDi+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bHD4bRcAio0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhucPhvcPhwcPhxcAGAQPQO8r3XC//4YnD4Y3D4Zn/4aAL+MPhIbuMA0x/4RFhvdfhk0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcCoZApr4RHBvcnBvcYBAb3T4ZNs8bGYmwP+ONijQ0wH6QDAxyM+HIM5xzwthyM+Szu772ifPFibPC38lzwv/yCXPFsglzxYkzwsfzc3NyXD7ABsaAaiOSvhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJ88WJs8LfyXPC//IJc8WyCXPFiTPCx/Nzc3J+ERvFPsA4l8G4wB/+GcoABj4SvhL+EL4TvhM+E0DPCCCEA8COGm64wIgghARdDlQuuMCIIIQIXszCLrjAiYjHQRoMPhIbuMA+kGV1NHQ+kDf0YjbPCCWMPgj+E2+3iCOEDD4SfhMxwUgljD4I/hNud7f8uhmIColJB4ERIgh+kJvE9cL/8MA8ujJ2zz4APhOIvhuUwLbPF8D2zx/+GciIB8oAFj4Sn/Iz4WAygBzz0DOcc8LbsjPkSe6e+b4S88LfyPPFsgjzxbNzcmAQPsAWwEkiPgj+FC5IJYw+CP4Ubzf8uksIQAkVGlja2V0IGlzIGZyZWV6aW5nACpBZGRyZXNzIGNhbid0IGJlIG51bGwEajD4SG7jANN/0YjbPCCWMPgj+E2+3iCOEDD4SfhMxwUgljD4I/hNud7f8uhm+AD4b9s8f/hnKiUkKAAM+En4TscFAEhNZXRob2QgZm9yIHRoZSBvd25lciBvciBtYW5hZ2VyIG9ubHkDuDD4SG7jANMf+ERYb3X4ZNFwXyD4RHBvcnBvcYBAb3T4ZNs8bDMjwP+OMiXQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAjwI4aYzxYjzwt/Is8LHyHPCx/JcPsAKiknAY6OPfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJM8LfyPPCx8izwsfzcn4RG8U+wDiXwPjAH/4ZygAbvhG+EP4QsjL/8s/ywD4Ss8W+EvIy3/4TM8W+E3PCx/4TsjO+E/PC3/4UM8LH/hRzwsfzc3J7VQADPhP+FD4UQBy7UTQ0//TP9MA+kDU0dDTf/pA0x/U0dD6QNN/0x/TH9H4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hiAQr0pCD0oSwAAA==",
    code: "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",
    codeHash: "d94f5096d68b27f42caf7a56f731db47b810d9743200f170f8a69e49b70c72ef",
};
export default TicketTokenContract;