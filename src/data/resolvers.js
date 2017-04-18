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
  Mutation: {
    addBook(_, args) {
      data.push(args)
      return args
    }
  }
}

export default resolverFunctions
