import { Server } from "@overnightjs/core";
import graphqlHTTP from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';
import { services } from "./services";
import * as dotenv from 'dotenv';

export default class SetupServer extends Server {
    
    constructor() {
        super()
    }

    private port = 3000;

    public catMessage = 'Gatinhoooooooo'


    public start(): void {
        let typeDefs: string[] = [`
            type Query {
                catMessage: String
            }
            
            type Mutation {
                catMessage(message: String) : String
            }
        `];
        const resolvers = {
            Query: {
                catMessage: () => this.catMessage
            },
            Mutation: {
                catMessage: (_: any, catData: any) => {
                    this.catMessage = catData.message;
                    return this.catMessage;
                }
            }
        };
        services.forEach((service) => {
            typeDefs.push(service.configTypeDefs())
            service.configResolvers(resolvers)
        })
        this.app.use(
            '/graphql',
            graphqlHTTP({
                schema: makeExecutableSchema({typeDefs, resolvers}),
                graphiql: true
            })
        )
        this.app.listen(this.port, () => console.log(`Node Graphql API listening on port ${this.port}!`))
    }
    

}