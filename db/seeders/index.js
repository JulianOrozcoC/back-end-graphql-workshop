require('dotenv').config();
import db from '../connection';

// Models
import Post from '../../mongoose/post';
import Comment from '../../mongoose/comment';

//Seeders
import posts from './post';
import comments from './comment';

// Delete all documents of a Collection
const clearCollections = async arrayOfcollections => {
  for (const collection of arrayOfcollections) {
    await collection.remove({}, (err, OK) => {
      if (err) console.log(err);
      if (OK) {
        console.log(`${collection.modelName} collection cleared!`);
      }
    });
  }
};

// Insert data to a collection
const insertData = (collection, data) => {
  collection.collection.insertMany(data, err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`Data inserted to ${collection.modelName} collection correctly!`);
};

const dbSeeder = async () => {
  const collections = [Post, Comment];
  await clearCollections(collections);
  insertData(Post, posts);
  // insertData(Comment, await comments());
  db.close();
};

const seedOptions = {
  Database: async () => {
    dbSeeder();
  },
  Options: async () => {
    printUsage();
  },
};

const printUsage = () => {
  const availableOptions = Object.keys(seedOptions).join('\n\t');
  console.log(
    `\nUSAGE:\n\tnpm run seed [options]\n\nOptions:\n\t${availableOptions}`,
  );
  db.close();
};

const executeCommands = async args => {
  const seederOptions = args.slice(2);
  const invalidOptions = seederOptions.find(option => !seedOptions[option]);
  if (invalidOptions) {
    printUsage();
  } else {
    const promises = seederOptions.map(option => seedOptions[option]());
    await Promise.all(promises);
  }
};

if (require.main === module) {
  db.init();
  executeCommands(process.argv);
} else {
  module.exports = { executeCommands };
}