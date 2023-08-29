const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login(user: {username: String, email: String, password: String}): Auth
    addUser(user: {username: String, email: String, password: String}): Auth
    saveBooks(Book: {bookId: String, authors: [String], description: String, title: String, image: String, link: String}): Book
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
