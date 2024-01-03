"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const express_graphql_1 = tslib_1.__importDefault(require("express-graphql"));
const graphql_tools_1 = require("graphql-tools");
const services_1 = require("./services");
class SetupServer extends core_1.Server {
    constructor() {
        super();
        this.port = 3000;
        this.catMessage = 'Gatinhoooooooo';
    }
    start() {
        let typeDefs = [`
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
                catMessage: (_, catData) => {
                    this.catMessage = catData.message;
                    return this.catMessage;
                }
            }
        };
        services_1.services.forEach((service) => {
            typeDefs.push(service.configTypeDefs());
            service.configResolvers(resolvers);
        });
        this.app.use('/graphql', (0, express_graphql_1.default)({
            schema: (0, graphql_tools_1.makeExecutableSchema)({ typeDefs, resolvers }),
            graphiql: true
        }));
        this.app.listen(this.port, () => console.log(`Node Graphql API listening on port ${this.port}!`));
    }
}
exports.default = SetupServer;
//# sourceMappingURL=server.js.map