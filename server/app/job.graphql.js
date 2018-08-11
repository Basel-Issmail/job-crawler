import { gql } from 'apollo-server-express';


// Construct a schema, using GraphQL schema language
const Job = gql`
 type Job {
    description: String
    title: String
  }

`;

export default Job;
