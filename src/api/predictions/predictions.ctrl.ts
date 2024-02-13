import { PredictionRepository } from "./predictions.repo";

export default async (server) => {
    const pR = PredictionRepository;

    const savePrediction = async (req, reply) => {
        try {
            return await pR.savePrediction(req.user.id, req.body);
        }
        catch(e){
            return server.httpErrors.createError(500, e);
        }
    };

    const getPredictions = async (req, reply) => {
        try {
            return await pR.getPredictions(req.user.id);
        }
        catch(e){
            return server.httpErrors.createError(500, e);
        }
    };

    const deletePrediction = async (req, reply) => {
        try {
            return await pR.deletePrediction(req.user.id, req.params);
        }
        catch(e){
            return server.httpErrors.createError(500, e);
        }
    };

    return {
        savePrediction,
        getPredictions,
        deletePrediction
    };
}