import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { stackoverflowDefs, stackoverflowResolvers } from './app/stackoverflow/stackoverflow.graphql';


const app = express();

// db.url is different depending on NODE_ENV


const server = new ApolloServer({
  typeDefs: [stackoverflowDefs],
  resolvers: [stackoverflowResolvers],
  context: ({ req }) => ({
    req,
  }),
});

// MiddleWare
server.applyMiddleware({ app });

export { app, server };
