import { IAuthor } from "../interfaces";
import { Author } from "../models";

export class AuthorRepository {
    constructor() { }

    public async getAll(): Promise<IAuthor[]> {
        return Author.find();
    }

    public async add({ name }: { name: string }): Promise<IAuthor> {
        const author = Author.create({ name });
        return author;
    }

    public async getOne(id: string): Promise<IAuthor> {
        const author = await Author.findById(id);
        if (!author) {
            throw new Error("Author not found");

        }
        return author;
    }
}
