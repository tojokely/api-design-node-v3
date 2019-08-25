import mongoose from 'mongoose'
import options from '../config'
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

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
