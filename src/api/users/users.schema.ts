export const userRegisterSchema = {
    summary: "Creates a new user and returns user and jwt token",
    tags: ["users"],
    body: {
        type: "object",
        properties: {
            username: {
                type: "string"
            },
            password: {
                type: "string"
            },
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                user: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        username: {
                            type: "string"
                        },
                    }
                },
                token: {
                    type: "string"
                },
            }
        },
    }
}

export const userLoginSchema = {
    summary: "Returns jwt token if username and password are correct",
    tags: ["users"],
    body: {
        type: "object",
        properties: {
            username: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                token: {
                    type: "string"
                },
            }
        },
    }
}

export const getUserSchema = {
    summary: "Returns user information of logged in user",
    tags: ["users"],
    response: {
        200: {
            type: "object",
            properties: {
                id: {
                    type: "number"
                },
                username: {
                    type: "string"
                },
            }
        },
    }
}