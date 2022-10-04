import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { IAuthor } from "../../../interfaces";
import { BookRepository } from "../../../repositories";
import { BookType } from "./book";

const bookRepository = new BookRepository();

export const AuthorType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Author',
    description: 'Author type',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(BookType),
            resolve: (author: IAuthor) => bookRepository.getByAuthor(author.id)
        }
    })
});