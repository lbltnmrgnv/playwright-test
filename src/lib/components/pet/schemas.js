module.exports = {
    pet: {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "category": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "name"
                ],
                "additionalProperties": false
            },
            "name": {
                "type": "string"
            },
            "photoUrls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "tags": {
                "type": "array",
                "items": [
                    {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "id",
                            "name"
                        ]
                    }
                ],
                "additionalProperties": false
            },
            "status": {
                "type": "string"
            }
        },
        "required": [
            "id",
            "category",
            "name",
            "photoUrls",
            "tags",
            "status"
        ],
        "additionalProperties": false
    }
}