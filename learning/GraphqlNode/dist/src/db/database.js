"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConnected = exports.close = exports.connect = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@src/utils/utils");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const importFresh = require('import-fresh');
const config = importFresh('config');
let dbConfig = (0, utils_1.deepCopy)(config.get('App.database.options'));
//Fixes entities, migrations, subscribers paths for compiled code
if (!process.env.TS_NODE_DEV) {
    for (const property of ['entities', 'migrations', 'subscribers', 'cli']) {
        if (!dbConfig[property] || typeof dbConfig[property] !== 'object') {
            continue;
        }
        if (Array.isArray(dbConfig[property])) {
            dbConfig[property] = dbConfig[property].map((path) => (0, path_1.join)('dist', path));
        }
        else {
            ['entitiesDir', 'migrationsDir', 'subscribersDir'].forEach((key) => (dbConfig[property][key] = (0, path_1.join)('dist', dbConfig[property][key])));
        }
    }
}
const connectionManager = (0, typeorm_1.getConnectionManager)();
const connection = connectionManager.create(dbConfig);
const connect = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection.connect();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.connect = connect;
const close = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield connection.close();
});
exports.close = close;
const isConnected = () => connection.isConnected;
exports.isConnected = isConnected;
exports.default = connection;
//# sourceMappingURL=database.js.map