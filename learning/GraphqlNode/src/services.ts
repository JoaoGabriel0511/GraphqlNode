import BaseService from "./services/baseService"
import CatService from "./services/catService"

export const services: BaseService[] = [
    new CatService()
]