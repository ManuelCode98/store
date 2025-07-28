import { dotenv, Pool } from "./allImports";
dotenv.config();

const env = process.env;

const pool = new Pool({
    host: env.HOST,
    user: env.POSTGRES_USER,
    database: env.POSTGRES_DB,
    password: env.POSTGRES_PASSWORD,
    port: 5436
})


export {
    pool
}