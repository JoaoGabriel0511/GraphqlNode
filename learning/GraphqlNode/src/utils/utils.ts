export function deepCopy(object: object | Array<any>): object | Array<any> {
    return JSON.parse(JSON.stringify(object));
}