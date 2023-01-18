export const emailListResponse = {
    "status": true,
    "message": "Email list",
    "Receiver": [
        {
            "id": 2,
            "Sender": 1,
            "Receiver": 3,
            "Cc": [
                4
            ],
            "Subject": "Test 1",
            "Body": "This is test message",
            "Date": "2023-01-04T10:19:22.400953Z",
            "ReceiverLabel": "None",
            "ReceiverImportant": false,
            "ReceiverTrash": false,
            "ReceiverDelete": false
        }
    ],
    "Cc": [
        {
            "id": 1,
            "Sender": 1,
            "Receiver": 2,
            "Cc": [
                3
            ],
            "Subject": "Test 2",
            "Body": "This is test message",
            "Date": "2023-01-03T10:19:01.844525Z",
            "CcLabel": "None",
            "CcImportant": false,
            "CcTrash": false,
            "CcDelete": false
        },
        {
            "id": 4,
            "Sender": 1,
            "Receiver": 2,
            "Cc": [
                3
            ],
            "Subject": "Test 3",
            "Body": "This is test message",
            "Date": "2023-01-06T17:11:49.253726Z",
            "CcLabel": "None",
            "CcImportant": false,
            "CcTrash": false,
            "CcDelete": false
        }
    ],
    "Bcc": [
        {
            "id": 3,
            "Sender": 1,
            "Receiver": 2,
            "Cc": [
                4
            ],
            "Subject": "Test 4",
            "Body": "This is test message",
            "Date": "2023-01-05T15:14:34.300244Z",
            "BccLabel": "None",
            "BccImportant": false,
            "BccTrash": false,
            "BccDelete": false
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