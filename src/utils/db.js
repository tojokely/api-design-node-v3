import mongoose from 'mongoose'
import options from '../config'
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

/* using predefined mongodb url */
/* export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
 )
} */

export const connect = () => {
  mongoServer = new MongoMemoryServer();
  mongoServer
   .getConnectionString()
   .then((mongoUri) => {
     return mongoose.connect(mongoUri, (err) => {
       if (err) console.log(err);
     });
   })
}
