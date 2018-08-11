import { gql } from 'apollo-server-express';


// Construct a schema, using GraphQL schema language
const Job = gql`
 input SearchInput {
    keyWord: String!
    pageNumber: Int
    location: String
  } 

 type Job {
    description: String
    title: String
    link: String
    company: String
  }
  type Mutation
`;

export default Job;
