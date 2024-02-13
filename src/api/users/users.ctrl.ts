import { UserRepository } from "./users.repo";

export default async (server) => {
    const uR = UserRepository;

    const getUser = async (req, reply) => {
        try {
            return await uR.getUser(req.user.id);
        }
        catch(e){
            return server.httpErrors.createError(500, e);
        }
    };

    return {
        getUser
    };
}
