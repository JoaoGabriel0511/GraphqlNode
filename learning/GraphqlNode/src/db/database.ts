
import { deepCopy } from '@src/utils/utils';
import { join } from 'path';
import { Connection, ConnectionOptions, getConnectionManager } from 'typeorm';
const importFresh = require('import-fresh');
const config = importFresh('config');

let dbConfig: any = deepCopy(config.get('App.database.options'))

//Fixes entities, migrations, subscribers paths for compiled code
if (!process.env.TS_NODE_DEV) {
  for (const property of ['entities', 'migrations', 'subscribers', 'cli']) {
    if (!dbConfig[property] || typeof dbConfig[property] !== 'object') {
      continue;
    }
    if (Array.isArray(dbConfig[property])) {
      dbConfig[property] = dbConfig[property].map((path: string) =>
        join('dist', path)
      );
    } else {
      ['entitiesDir', 'migrationsDir', 'subscribersDir'].forEach(
        (key) =>
          (dbConfig[property][key] = join('dist', dbConfig[property][key]))
      );
    }
  }
}

const connectionManager = getConnectionManager();
const connection: Connection = connectionManager.create(
  dbConfig as ConnectionOptions
);

export const connect = async (): Promise<void> => {
  try {
    await connection.connect();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const close = async (): Promise<void> => {
  await connection.close();
};

export const isConnected = (): boolean => connection.isConnected;

export default connection;
