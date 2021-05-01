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
                        "name": "ownerAddress",
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
                "name": "changeOwnerAddress",
                "inputs": [
                    {
                        "name": "ownerAddress",
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
                        "name": "ownerAddress",
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
                        "name": "ownerAddress",
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
    tvc: "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",
    code: "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",
    codeHash: "54885bdfef9604c6bdefeb96b3dfc2bfac411539b737927aae1e9501cc9f98e4",
};
export default TicketTokenContract;