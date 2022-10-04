import { model, Schema } from "mongoose";
import { IAuthor } from "../interfaces";


export const authorSchema = new Schema<IAuthor>({
    name: { type: String, required: true },
});

export const Author = model<IAuthor>('Author', authorSchema);