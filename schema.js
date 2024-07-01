const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`#graphql
  type Query {
    hello(name: String!): String
    age: Int
    users: [User!]!
  }
  type Mutation {
    createUser(user: NewUser!): User
  }
  input NewUser {
    name: String!
    email: String!
    phone: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }
`);

module.exports = schema;
