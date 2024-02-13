import fastifyJwt from "@fastify/jwt";
import fp from "fastify-plugin";
import process from "process";

export default fp(async (fastify:any, done) => {

    fastify.register(fastifyJwt, {
        secret: process.env.JWT_SECRET
    })

    fastify.decorate("userACL", async (req, reply) => {
        fastify.aclFactory
        {
            const token = await req.jwtVerify();
            if (token.role === "User") { }
            else {
                reply.send("Unauthorized");
            }
        }
    });
    
    // done();
})