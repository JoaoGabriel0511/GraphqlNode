import { getRepository } from "typeorm";
import BaseService from "./baseService";
import Cat from "../db/entity/cat";

export default class CatService implements BaseService {
    public configTypeDefs = (): string => {
        let typeDefs = `
            type Cat {
                id: Int,
                name: String,
                color: String,
                age: Int,
                weithInKg: Int
            }
        `
        typeDefs += `
            extend type Query {
                cats: [Cat]
            }
        `
        typeDefs += `
            extend type Mutation {
                cat(name: String, color: String, age: Int, weithInKg: Int): Cat!
            }
        `
        return typeDefs;
    }

    public configResolvers = (resolvers: any) => {
        resolvers.Query.cats = async () => {
            console.log('aqui')
            const repo = getRepository(Cat)
            console.log('aqui denovo')
            return await repo.find()
        }

        resolvers.Mutation.cat = async (_: any, cat: any) => {
            const repo = getRepository(Cat)
            await repo.save(cat)
            return cat
        }
    }
}