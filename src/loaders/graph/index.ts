import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { AuthorRepository, BookRepository } from "../../repositories";
import { AuthorType, BookType } from "./types";

// TODO: connect through service layer??
const bookRepository = new BookRepository();
const authorRepository = new AuthorRepository();

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'a book.',
            args: {
                id: { type: GraphQLString },
            },
            resolve: async (_, args) => bookRepository.getOne(args.id),
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of books.',
            resolve: () => bookRepository.getAll(),
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of authors.',
            resolve: () => authorRepository.getAll(),
        },
        author: {
            type: AuthorType,
            description: 'an author.',
            args: {
                id: { type: GraphQLString },
            },
            resolve: (_, args) => authorRepository.getOne(args.id),
        },
    }),
});

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'add a book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => bookRepository.add({ name: args.name, authorId: args.authorId })
        },
        addAuthor: {
            type: AuthorType,
            description: 'add an author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => authorRepository.add({ name: args.name })
        },
    })
})

export const myRootSchema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
});

