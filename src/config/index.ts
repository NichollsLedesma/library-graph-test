import dotEnv from "dotenv";
const envFile = dotEnv.config();

if (!envFile) throw new Error("env file is missing.");

// const {parsed} = envFile
// TODO: improve this!!
const config = {
    port: process.env.PORT || 4000,
    graph: {
        path: '/graph-ql',
        options: {
            graphiql: true
        }
    },
    db: {
        host: process.env.MONGO_DB_HOST,
        port: process.env.MONGO_DB_PORT,
        name: process.env.MONGO_DB_NAME,
    }
}
export {
    config
}