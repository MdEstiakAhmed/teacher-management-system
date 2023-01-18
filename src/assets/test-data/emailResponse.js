export const inboxEmailListResponse = {
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
            "Subject": "Test 2",
            "Body": "This is test message",
            "Date": "2023-01-04T10:19:22.400953Z",
            "ReceiverLabel": "Personal",
            "ReceiverImportant": true,
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
            "Subject": "Test 1",
            "Body": "This is test message",
            "Date": "2023-01-03T10:19:01.844525Z",
            "CcLabel": "None",
            "CcImportant": true,
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
            "CcLabel": "Important",
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
            "Subject": "Test 3",
            "Body": "This is test message",
            "Date": "2023-01-05T15:14:34.300244Z",
            "BccLabel": "Company",
            "BccImportant": true,
            "BccTrash": true,
            "BccDelete": false
        }
    ]
}

export const sentEmailListResponse = {
    "status": true,
    "message": "Sent email list",
    "data": [
        {
            "id": 7,
            "Receiver": 2,
            "Cc": [
                3
            ],
            "Bcc": [
                4
            ],
            "Subject": "Test 11",
            "Body": "This is test message",
            "Date": "2023-01-06T10:19:01.844525Z",
            "Draft": false,
            "SenderLabel": "Personal",
            "SenderImportant": false,
            "SenderTrash": true,
            "SenderDelete": false
        },
        {
            "id": 8,
            "Receiver": 3,
            "Cc": [
                4
            ],
            "Bcc": [],
            "Subject": "Test 22",
            "Body": "This is test message",
            "Date": "2023-01-06T10:19:22.400953Z",
            "Draft": false,
            "SenderLabel": "None",
            "SenderImportant": false,
            "SenderTrash": false,
            "SenderDelete": false
        },
        {
            "id": 9,
            "Receiver": 2,
            "Cc": [
                4
            ],
            "Bcc": [
                3
            ],
            "Subject": "Test 33",
            "Body": "This is test message",
            "Date": "2023-01-06T15:14:34.300244Z",
            "Draft": true,
            "SenderLabel": "Private",
            "SenderImportant": false,
            "SenderTrash": false,
            "SenderDelete": false
        },
        {
            "id": 10,
            "Receiver": 2,
            "Cc": [
                3
            ],
            "Bcc": [
                4
            ],
            "Subject": "Test 10",
            "Body": "This is test message",
            "Date": "2023-01-06T17:11:49.253726Z",
            "Draft": true,
            "SenderLabel": "Personal",
            "SenderImportant": true,
            "SenderTrash": false,
            "SenderDelete": false
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