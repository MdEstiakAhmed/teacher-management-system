export const emailListResponse = {
    "status": true,
    "message": "Email list",
    "data": [
        {
            "id": 1,
            "Subject": "hello",
            "Body": "This is test message",
            "Date": "2022-12-28T17:25:09.646296Z",
            "Label": "None",
            "Draft": false,
            "Important": false,
            "Read": false,
            "Deleted": false,
            "Sender": 3,
            "Receiver": 2,
            "CarbonCopy": [
                1
            ],
            "BlindCarbonCopy": [
                1
            ]
        },
        {
            "id": 2,
            "Subject": "bye",
            "Body": "This is test message",
            "Date": "2022-12-28T17:25:46.255373Z",
            "Label": "personal",
            "Draft": false,
            "Important": false,
            "Read": false,
            "Deleted": false,
            "Sender": 3,
            "Receiver": 2,
            "CarbonCopy": [
                1
            ],
            "BlindCarbonCopy": [
                1
            ]
        },
        {
            "id": 3,
            "Subject": "hi",
            "Body": "This is test message",
            "Date": "2022-12-28T17:26:32.938309Z",
            "Label": "private",
            "Draft": false,
            "Important": false,
            "Read": false,
            "Deleted": false,
            "Sender": 3,
            "Receiver": 2,
            "CarbonCopy": [
                1
            ],
            "BlindCarbonCopy": [
                1
            ]
        }
    ]
}

export const emailResponse = {
    "status": true,
    "message": "Receiver email detail",
    "data": {
        "id": 1,
        "Sender": 1,
        "Receiver": 2,
        "Cc": [
            3
        ],
        "Subject": "Test",
        "Body": "This is test message",
        "Date": "2023-01-06T10:19:01.844525Z",
        "ReceiverLabel": "None",
        "ReceiverImportant": true,
        "ReceiverTrash": false,
        "ReceiverDelete": false
    }
}