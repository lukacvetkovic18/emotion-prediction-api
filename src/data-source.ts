import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
    type: "postgres",
    // connectTimeout  : 60 * 60 * 1000,
    // acquireTimeout  : 60 * 60 * 1000,
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/api/**/*.entity.ts"],
    // subscribers: []"../../src/api/**/*.ts",
    migrations: ["src/migrations/**/*.ts"]
})
