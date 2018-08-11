import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { stackoverflowDefs, Job, stackoverflowResolvers } from './app/stackoverflow/stackoverflow.graphql';
import { indeedDefs, indeedResolvers } from './app/indeed/indeed.graphql';

const app = express();

// db.url is different depending on NODE_ENV


const server = new ApolloServer({
  typeDefs: [stackoverflowDefs, indeedDefs, Job],
  resolvers: [stackoverflowResolvers, indeedResolvers],
  context: ({ req }) => ({
    req,
  }),
});

// MiddleWare
server.applyMiddleware({ app });

export { app, server };
