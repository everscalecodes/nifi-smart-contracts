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
    code: "te6ccgECLwEAB1UABCj/AIrtUyDjAyDA/+MCIMD+4wLyCy0EAS4BAAID/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjh2BAgDXGCD5AQHTAAGU0/8DAZMC+ELiIPhl+RDyqJXTAAHyeuLTPwGOHfhDIbkgnzAg+COBA+iogggbd0Cgud6TIPhj4PI02DDTHwHbPPhHbgsFAwAE8nwBaiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHANwh1w0f8rwh3QHbPPhHbvJ8BQNCIIIQJfJ9qLuOgOAgghBTrS0nu46A4CCCEHTPM/G7joDgHBEGAzwgghBcxOa2uuMCIIIQZWgQr7rjAiCCEHTPM/G64wIPDgcEMjD4QW7jAPhG8nNx+GbXDf+K3/pBit/XDR8LJxoIBFCK39FfMlyI+En4SscF8uhnIYgh+kJvE9cL/8MA8ujJ+AAwAfhs+G0iGQoYCQI0iCHDAPLoyF8D+G74JfgV+BD4b18D2zx/+GckKgAwTWV0aG9kIGZvciB0aGUgcm9vdCBvbmx5AW7tRNAg10nCAY4q0//TP9MA1fpA0//XC//4b/hu+Gz6QNN/1wsf+G34a/hqf/hh+Gb4Y/hijoDiDAH+9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXC3+RcOL4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhscPhtcPhucPhvcAGAQPQO8r3XC//4YnD4Yw0ADHD4Zn/4YQN+MPhBbuMA0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOVoEK+M8WIc8L/8lw+wDeMOMAf/hnLCsqAzYw+EFu4wDRiPhJ+EzHBfLoZfgAcPht2zx/+GcsECoANk1ldGhvZCBmb3IgdGhlIG1hbmFnZXIgb25seQM8IIIQNcdcDLrjAiCCEEVkPGi64wIgghBTrS0nuuMCGxQSBFow+EFu4wDTH9GI2zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZiAsJiUTAiSI+CMiufLoavgAMPht2zx/+GcXKgQgMPhBbuMA+kGK39cNH4rf0SwaGRUEZojbPCCWMPgj+E2+3iCOEDD4SfhMxwUgljD4I/hNud7f8uhmIYgh+kJvE9cL/8MA8ujJISYlGBYCKoj4IyK58uhq+ABbAfhs+G3bPH/4ZxcqACJJbnZhbGlkIGxvY2sgdGltZQAqQWRkcmVzcyBjYW4ndCBiZSBudWxsAArU0dDTHwAK1NHQ+kADljD4QW7jANHbPCbA/441KNDTAfpAMDHIz4cgznHPC2HIz5LXHXAyJ88WJs8LfyXPC/8kzwv/yCTPFiPPCx/Nzclw+wDeXwbjAH/4ZywgKgM8IIIQFIXQPLrjAiCCEBW8JUK64wIgghAl8n2ouuMCKCEdA+Iw+EFu4wDTH/hEWG91+GTRjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcF8gjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcPhEcG9ycG9xgEBvdPhk2zxsZibA/ywgHgFujjUo0NMB+kAwMcjPhyDOcc8LYcjPkpfJ9qInzxYmzwt/Jc8L/yTPC//IJM8WI88LH83NyXD7AB8Bpo5J+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpyPhEbxXPCx8nzxYmzwt/Jc8L/yTPC//IJM8WI88LH83NyfhEbxT7AOJfBuMAf/hnKgAY+Er4S/hC+E74TPhNBBow+EFu4wDXDf+K39GILCcmIgR42zwgljD4I/hNvt4gjhAw+En4TMcFIJYw+CP4Tbne3/LoZiCIIcMA8ujI+AD4TiL4blMC2zxfA9s8f/hnJSQjKgBK+ErIz4cgznHPC2HIz5Hv8DKm+EvPC38jzwv/Is8L/83JcPsAWwAwUHVibGljIGtleSBjYW4ndCBiZSBudWxsABb4RSBukjBw3vhOugBITWV0aG9kIGZvciB0aGUgb3duZXIgb3IgbWFuYWdlciBvbmx5AArU0dDT/wOiMPhBbuMA0x/4RFhvdfhk0XD4RHBvcnBvcYBAb3T4ZNs8MSHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACUhdA8jPFiHPC//JcPsALCspAXiOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx8hzwv/yfhEbxT7AOIw4wB/+GcqAF74QsjL//hDzws/+EbPCwDI+Ez4TvhPXiDOy//L//hK+Ev4TV4wzxHOy3/LH8ntVAAE+E8AWu1E0NP/0z/TANX6QNP/1wv/+G/4bvhs+kDTf9cLH/ht+Gv4an/4Yfhm+GP4YgEK9KQg9KEuAAA=",
    codeHash: "c6b791b55ebf85a36a32f7dbf2f6caf8fee91257c7e38c98fcd6673fa8df556f",
};
export default RandomTokenContract;