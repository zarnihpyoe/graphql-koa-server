import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const schema = `
type Book {
  isbn: String!
  title: String!
  subtitle: String
  authors: [String!]!
  publisher: String!
  publishedDate: String
  category: String!
  source: String
}

# the schema allows the following query:
type Query {
  books: [Book]
  book(isbn: String!): Book
}
`

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})
