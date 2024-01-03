require('dotenv').config();
module.exports = {
   App: {
     port: process.env.PORT || 3000,
     database: {
       options: {
         type: 'postgres',
         host: process.env.DB_HOST,
         port: process.env.DB_PORT,
         username: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_DATABASE,
         synchronize: false,
         logging: false,
         supportBigNumbers: true,
         timezone: 'Z',
         dateStrings: true,
         entities: ['src/db/entity/**/*{.ts,.js}'],
         migrations: ['src/db/migration/**/*{.ts,.js}'],
         subscribers: ['src/db/subscriber/**/*{.ts,.js}']
       },
      },
   },
 };