import mongoose from 'mongoose';

require('dotenv').config();
const { MONGO_URI } = process.env;

const db = {
  init: () => {
    mongoose.connect(
      MONGO_URI,
      { useNewUrlParser: true },
    );
    console.log('Connection to db successfull!');
  },
  close: () => {
    mongoose.disconnect();
    console.log('Connection to db closed!');
  },
};

export default db;
