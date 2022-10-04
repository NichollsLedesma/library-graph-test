import mongoose from "mongoose";
import { config } from "../../config";


export const connect = async (): Promise<void> => {
    const connection = await mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    connection.connection.db
        ? console.log("connection successfully established")
        : console.log("error trying to connect");
    
};