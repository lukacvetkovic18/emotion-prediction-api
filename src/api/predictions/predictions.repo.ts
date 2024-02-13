import { AppDataSource } from "../../data-source";
import { User } from "../users/users.entity";
import { Prediction } from "./predictions.entity";

const _uR = AppDataSource.getRepository(User);
const _pR = AppDataSource.getRepository(Prediction);

export const PredictionRepository = AppDataSource.getRepository(Prediction).extend({

    async savePrediction(userId: number, data) {
        const user = await _uR.findOne({ where: { id: userId }});
        return await _pR.save(_pR.create({
            user: user,
            image: data.image,
            prediction: data.prediction,
            predictionPercentage: data.predictionPercentage
        }));
    },

    async getPredictions(userId: number) {
        return await _pR.find({
            where: {
                user: {
                    id: userId
                }
            }
        });
    },

    async deletePrediction(userId: number, data) {
        const prediction = await _pR.findOne({
            where: {
                id: data.predictionId,
                user: {
                    id: userId
                }
            }
        });
        if(!prediction) {
            throw new Error("Prediction doesn't exist");
        }
        await _pR.remove(prediction);
        return { message: "You have successfully deleted your prediction." };
    }

})