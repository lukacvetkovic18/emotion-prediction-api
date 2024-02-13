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

export const deletePredictionSchema = {
    summary: "Deletes a prediction with given ID if it belongs to logged in user",
    tags: ["predictions"],
    params: {
        type: "object",
        properties: {
            predictionId: {
                type: "number"
            },
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                message: {
                    type: "string"
                },
            }
        },
    }
}