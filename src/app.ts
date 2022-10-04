import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import { config } from "./config";
import { GraphQL } from "./loaders";

export default class ExpressApp {
    private app: Application;
    constructor() {
        this.app = express();
        this.app.use(config.graph.path, graphqlHTTP({
            ...config.graph.options,
            schema: GraphQL.myRootSchema
        }));
    }

    public getApp(): Application {
        return this.app;
    }
}