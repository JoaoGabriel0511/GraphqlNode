import {DataSource} from 'typeorm'
const importFresh = require('import-fresh');
const config = importFresh('config');

export const connectionSource = new DataSource(
  { ...config.get('App.database.options')}
)
