import { gql } from 'apollo-server-express';
import Job from '../job.graphql';
import { getJobs } from './stackoverflow.crawler';

// Construct a schema, using GraphQL schema language
const stackoverflowDefs = gql`
   type Query {
    allStackoverflowJobs: [Job]
  }

`;

// Provide resolver functions for your schema fields
const stackoverflowResolvers = {
  Query: {
    allStackoverflowJobs: () => getJobs(),
  },
};

export { stackoverflowDefs, Job, stackoverflowResolvers };
