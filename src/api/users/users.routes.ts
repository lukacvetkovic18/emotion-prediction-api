import { AppDataSource } from "../../data-source";
import usersCtrl from "./users.ctrl";
import { User } from "./users.entity";
import { getUserSchema, userLoginSchema, userRegisterSchema } from "./users.schema";

export default async (fastify, opts) => {
    const userController = usersCtrl(fastify);
    const userRepo = AppDataSource.getRepository(User);

    fastify.post(
        "/api/users/register",
        { schema: userRegisterSchema },
        async (req, reply) => {
            if(await userRepo.findOne({ where: { username: req.body.username }})) {
                return reply.code(400).send({ message: "User with entered username already exits!" });
            }
            else {
                const user: any = await userRepo.save(userRepo.create(req.body));
                const token = await fastify.jwt.sign({ id: user.id, role: "User" });
                return reply.send({
                    user: user,
                    token: token })
            }
        }
    );

    fastify.post(
        "/api/users/login",
        { schema: userLoginSchema },
        async (req, reply) => {
            const user = await userRepo.findOne({ where: { username: req.body.username }});
            if(!user) {
                return reply.code(400).send({ message: "User not found!" });
            }
            if(!req.body.password) {
                return reply.code(400).send({ message: "Password wasn't sent!" });
            }
            const checkPassword = await user.comparePassword(req.body.password);
            if(!checkPassword) {
                return reply.code(400).send({ message: "Invalid password!" });
            }
            else {
                const token = await fastify.jwt.sign({ id: user.id, role: "User" })
                return reply.send({ token: token })
            }
        }
    );

    fastify.route({
        method: "GET",
        url: "/api/users",
        preValidation: fastify.userACL,
        handler: (await userController).getUser,
        schema: getUserSchema
    });
}
