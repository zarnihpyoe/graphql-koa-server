import seed from './data.json'

const data = seed

const resolverFunctions = {
  Query: {
    books() {
      return data
    },
    book(_, { isbn }) {
      return data.find(book => book.isbn === isbn)
    }
  },
}

export default resolverFunctions
