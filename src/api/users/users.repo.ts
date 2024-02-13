import { AppDataSource } from "../../data-source";
import { Prediction } from "../predictions/predictions.entity";
import { User } from "./users.entity";

const _uR = AppDataSource.getRepository(User);
const _pR = AppDataSource.getRepository(Prediction);

export const UserRepository = AppDataSource.getRepository(User).extend({
    
    async getUser(userId: number) {
        return await _uR.findOne({ where: { id: userId }});
    },
})