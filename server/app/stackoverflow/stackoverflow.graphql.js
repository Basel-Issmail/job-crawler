import { gql } from 'apollo-server-express';
import Job from '../job.graphql';
import { getJobs, searchJobs } from './stackoverflow.crawler';

// Construct a schema, using GraphQL schema language
const stackoverflowDefs = gql`
   type Query {
    allStackoverflowJobs: [Job]
  }

  input SearchInput {
    keyWord: String!
    pageNumber: Int
  } 

  type Mutation {
    searchStackoverflowJobs(input: SearchInput): [Job]
  }
`;

// Provide resolver functions for your schema fields
const stackoverflowResolvers = {
  Query: {
    allStackoverflowJobs: () => getJobs(),
  },
  Mutation: {
    searchStackoverflowJobs: (root, { input }) => searchJobs(input),
  },
};

export { stackoverflowDefs, Job, stackoverflowResolvers };
