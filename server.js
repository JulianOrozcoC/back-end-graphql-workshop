require('dotenv').config();
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import db from './db/connection';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';


// Import models
import Post from './mongoose/post';
import Comment from './mongoose/comment';

// Mongo connection
db.init();

const { PORT } = process.env;
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: {
      Post,
      Comment,
    },
    graphiql: true,
  }),
);

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
