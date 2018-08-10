import { gql } from 'apollo-server-express';
import { getJobs } from './stackoverflow.crawler';

console.log(getJobs);

// Construct a schema, using GraphQL schema language
const stackoverflowDefs = gql`
 type Job {
    description: String
  }

  type Query {
    allJobs: [Job]
  }

`;

// Provide resolver functions for your schema fields
const stackoverflowResolvers = {
  Query: {
    allJobs: () => getJobs(),
  },
};

export { stackoverflowDefs, stackoverflowResolvers };
