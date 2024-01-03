"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const cat_1 = tslib_1.__importDefault(require("../db/entity/cat"));
class CatService {
    constructor() {
        this.configTypeDefs = () => {
            let typeDefs = `
            type Cat {
                id: Int,
                name: String,
                color: String,
                age: Int,
                weithInKg: Int
            }
        `;
            typeDefs += `
            extend type Query {
                cats: [Cat]
            }
        `;
            typeDefs += `
            extend type Mutation {
                cat(name: String, color: String, age: Int, weithInKg: Int): Cat!
            }
        `;
            return typeDefs;
        };
        this.configResolvers = (resolvers) => {
            resolvers.Query.cats = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log('aqui');
                const repo = (0, typeorm_1.getRepository)(cat_1.default);
                console.log('aqui denovo');
                return yield repo.find();
            });
            resolvers.Mutation.cat = (_, cat) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const repo = (0, typeorm_1.getRepository)(cat_1.default);
                yield repo.save(cat);
                return cat;
            });
        };
    }
}
exports.default = CatService;
//# sourceMappingURL=catService.js.map