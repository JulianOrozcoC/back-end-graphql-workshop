/* eslint-disable */
// prettier-ignore
require('dotenv').config();
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import db from './db/connection';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';


// Import models
import Account from './mongoose/account';
import Department from './mongoose/department';

// Mongo connection
db.init();

const { PORT } = process.env;
const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: {
      Account,
      Department,
      Location,
      Log,
      Role,
      Skill,
      Status,
      Team,
      User,
    },
    graphiql: true,
  }),
);

app.listen({ port: PORT }, () => {
  logger.info(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
