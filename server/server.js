import { ApolloServer } from 'apollo-server-express';
import express from 'express';


const app = express();

// db.url is different depending on NODE_ENV


const server = new ApolloServer({
  typeDefs: [],
  resolvers: [],
  context: ({ req }) => ({
    req,
  }),
});

// MiddleWare
server.applyMiddleware({ app });

export { app, server };
