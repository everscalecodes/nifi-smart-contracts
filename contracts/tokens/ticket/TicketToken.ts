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
    codeHash: "228bb111a884d69994da6578b6ac29d284b38949274e406863b5885ee620da11",
};
export default TicketTokenContract;