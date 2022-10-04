import { IBook } from "../interfaces";
import { Book } from "../models";
import { AuthorRepository } from "./author.repository";

export class BookRepository {
    private authorRepository : AuthorRepository

    constructor() {
        this.authorRepository = new AuthorRepository();
    }

    public async getAll(): Promise<IBook[]> {
        return Book.find();
    }

    public async getByAuthor(authorId: string): Promise<IBook[]> {
        const author = await this.authorRepository.getOne(authorId);
        return Book.find({author});
    }

    public async getOne(id: string): Promise<IBook> {
        const book = await Book.findById(id);
        if (!book) {
            throw new Error("Book not found.");
        }

        return book;
    }
    public async add({name, authorId}:{name:string, authorId:string}): Promise<IBook> {
        const author = await this.authorRepository.getOne(authorId);
        const newBook =  Book.create({name, author});
        return newBook;
    }
}
