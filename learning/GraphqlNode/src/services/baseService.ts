export default interface BaseService {
    configTypeDefs(): string;
    configResolvers(resolvers: any): void
}