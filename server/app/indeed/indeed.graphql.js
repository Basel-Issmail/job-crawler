import { gql } from 'apollo-server-express';
import Job from '../job.graphql';
import { searchJobs } from './indeed.crawler';

// Construct a schema, using GraphQL schema language
const indeedDefs = gql`
  extend type Mutation {
    searchIndeedJobs(input: SearchInput): [Job]
  }
`;

// Provide resolver functions for your schema fields
const indeedResolvers = {
  Mutation: {
    searchIndeedJobs: (root, { input }) => searchJobs(input),
  },
};

export { indeedDefs, Job, indeedResolvers };
