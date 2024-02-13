import predictionsCtrl from "./predictions.ctrl";
import { deletePredictionSchema, getPredictionsSchema, savePredictionSchema } from "./predictions.schema";

export default async (fastify, opts) => {
    const predictionController = predictionsCtrl(fastify);

    fastify.route({
        method: "POST",
        url: "/api/predictions",
        preValidation: fastify.userACL,
        handler: (await predictionController).savePrediction,
        schema: savePredictionSchema
    });

    fastify.route({
        method: "GET",
        url: "/api/predictions",
        preValidation: fastify.userACL,
        handler: (await predictionController).getPredictions,
        schema: getPredictionsSchema
    });

    fastify.route({
        method: "DELETE",
        url: "/api/predictions/:predictionId",
        preValidation: fastify.userACL,
        handler: (await predictionController).deletePrediction,
        schema: deletePredictionSchema
    });
}