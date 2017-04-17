
const books = [
  { isbn: "9780718157838", title: "Me Before You" },
  { isbn: "9780718157838", title: "Me Before You" },
  { isbn: "9780718157838", title: "Me Before You" },
]

const resolverFunctions = {
  Query: {
    books() {
      return books
    },
  },
}

export default resolverFunctions
