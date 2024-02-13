export const savePredictionSchema = {
    summary: "Creates a prediction to logged in user",
    tags: ["predictions"],
    body: {
        type: "object",
        properties: {
            image: {
                type: "string"
            },
            prediction: {
                type: "string"
            },
            predictionPercentage: {
                type: "number"
            },
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                id: {
                    type: "number"
                },
                image: {
                    type: "string"
                },
                prediction: {
                    type: "string"
                },
                predictionPercentage: {
                    type: "number"
                },
            }
        },
    }
}

export const getPredictionsSchema = {
    summary: "Returns all predictions that belong to logged in user",
    tags: ["predictions"],
    response: {
        200: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "number"
                    },
                    image: {
                        type: "string"
                    },
                    prediction: {
                        type: "string"
                    },
                    predictionPercentage: {
                        type: "number"
                    },
                }
            },
        }
    }
}