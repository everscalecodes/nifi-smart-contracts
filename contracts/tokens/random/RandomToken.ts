const RandomTokenContract = {
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
                "outputs": []
            },
            {
                "name": "receiveRandom",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getRandom",
                "inputs": [],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
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
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECKgEAB1sABCj/AIrtUyDjAyDA/+MCIMD+4wLyCygEASkBAAID/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjh2BAgDXGCD5AQHTAAGU0/8DAZMC+ELiIPhl+RDyqJXTAAHyeuLTPwGOHfhDIbkgnzAg+COBA+iogggbd0Cgud6TIPhj4PI02DDTHwHbPPhHbgoFAwAE8nwBaiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHANwh1w0f8rwh3QHbPPhHbvJ8BQNCIIIQJfJ9qLuOgOAgghBTrS0nu46A4CCCEHTPM/G7joDgGBAGAzwgghBcxOa2uuMCIIIQZWgQr7rjAiCCEHTPM/G64wIODQcEoDD4SG7jAPhG8nNx+GbXDf+V1NHQ0//f+kGV1NHQ+kDf1w0fldTR0NMf39FfMlyI+En4SscF8uhnIYgh+kJvE9cL/8MA8ujJ+AAwAfhs+G0iCgkWCAI0iCHDAPLoyF8D+G74JfgV+BD4b18D2zx/+GcgJQAwTWV0aG9kIGZvciB0aGUgcm9vdCBvbmx5AXbtRNAg10nCAY4u0//TP9MA+kDU0dDTf/pA0x/T/9TR0NP/0fhv+G74bfhs+Gv4an/4aPhm+GP4Yo6A4gsB/vQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wt/kXDi+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bHD4bXD4bnD4b3ABgED0DvK91wv/+GJw+GMMAAxw+GZ/+GgDfjD4SG7jANHbPCHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADlaBCvjPFiHPC//JcPsA3jDjAH/4ZycmJQM2MPhIbuMA0Yj4SfhMxwXy6GX4AHD4bds8f/hnJw8lADZNZXRob2QgZm9yIHRoZSBtYW5hZ2VyIG9ubHkDPCCCEDXHXAy64wIgghBFZDxouuMCIIIQU60tJ7rjAhcTEQRaMPhIbuMA0x/RiNs8IJYw+CP4Tb7eII4QMPhJ+EzHBSCWMPgj+E253t/y6GYgJyIhEgIkiPgjIrny6Gr4ADD4bds8f/hnFSUEfDD4SG7jAPpBldTR0PpA39cNH5XU0dDTH9/RiNs8IJYw+CP4Tb7eII4QMPhJ+EzHBSCWMPgj+E253t/y6GYhJyIhFANIiCH6Qm8T1wv/wwDy6MkhiPgjIrny6Gr4AFsB+Gz4bds8f/hnFhUlACJJbnZhbGlkIGxvY2sgdGltZQAqQWRkcmVzcyBjYW4ndCBiZSBudWxsA5Yw+Ehu4wDR2zwmwP+ONSjQ0wH6QDAxyM+HIM5xzwthyM+S1x1wMifPFibPC38lzwv/yCXPC/8kzxYjzwsfzc3JcPsA3l8G4wB/+GcnHCUDPCCCEBSF0Dy64wIgghAVvCVCuuMCIIIQJfJ9qLrjAiMdGQPiMPhIbuMA0x/4RFhvdfhk0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBfII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHD4RHBvcnBvcYBAb3T4ZNs8bGYmwP8nHBoBbo41KNDTAfpAMDHIz4cgznHPC2HIz5KXyfaiJ88WJs8LfyXPC//IJc8L/yTPFiPPCx/Nzclw+wAbAaaOSfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8Lacj4RG8VzwsfJ88WJs8LfyXPC//IJc8L/yTPFiPPCx/Nzcn4RG8U+wDiXwbjAH/4ZyUAGPhK+Ev4QvhO+Ez4TQRqMPhIbuMA1w3/ldTR0NP/39GI2zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZiAnIiEeAzKIIcMA8ujI+AD4TiL4blMC2zxfA9s8f/hnIB8lAEr4SsjPhyDOcc8LYcjPke/wMqb4S88LfyPPC/8izwv/zclw+wBbADBQdWJsaWMga2V5IGNhbid0IGJlIG51bGwAFvhFIG6SMHDe+E66AEhNZXRob2QgZm9yIHRoZSBvd25lciBvciBtYW5hZ2VyIG9ubHkDojD4SG7jANMf+ERYb3X4ZNFw+ERwb3Jwb3GAQG90+GTbPDEhwP+OKiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAlIXQPIzxYhzwv/yXD7ACcmJAF8jjX4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2nI+ERvFc8LHyLPC//NyfhEbxT7AOIw4wB/+GclAFz4RvhD+ELIy//LP8sA+ErPFvhLyMt/+EzPFvhNzwsf+E7PC//4T8jL/83Nye1UAAT4TwBi7UTQ0//TP9MA+kDU0dDTf/pA0x/T/9TR0NP/0fhv+G74bfhs+Gv4an/4aPhm+GP4YgEK9KQg9KEpAAA=",
    codeHash: "7bac64e81fa15f66bee5e7459caf8e1c05d1120092763d1b6de6ba92eda505c6",
};
export default RandomTokenContract;