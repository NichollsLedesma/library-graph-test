import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { IBook } from "../../../interfaces";
import { AuthorRepository } from "../../../repositories";
import { AuthorType } from "./author";

const authorRepository = new AuthorRepository();

export const BookType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Book',
    description: 'Book type',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        author: {
            type: AuthorType,
            resolve: (book: IBook) => authorRepository.getOne(book.authorId)
        }
    }),
})