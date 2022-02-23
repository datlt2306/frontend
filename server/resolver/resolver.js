import { authors, books } from '../data';

const resolvers = {
    Query: {
        books: () => books,
        book: (parent, agrs) => books.find(book => book.id == agrs.id),
        authors: () => authors,
        author: (parent, agrs) => authors.find(author => author.id == agrs.id)
    },
    Book: {
        author: (parent, agrs) => authors.find(author => author.id == parent.authorId)
    },
    Author: {
        books: (parent, agrs) => books.filter(book => book.authorId == parent.id)
    }
}
export default resolvers;