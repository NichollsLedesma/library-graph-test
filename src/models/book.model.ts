import { Schema, model } from 'mongoose';
import { IBook } from '../interfaces';
import {  authorSchema } from './author.model';


const bookSchema = new Schema<IBook>({
  name: { type: String, required: true },
  author: { type: authorSchema, required: true },
});

export const Book = model<IBook>('Book', bookSchema);