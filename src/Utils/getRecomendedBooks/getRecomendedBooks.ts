import apiManager from '../../APIs/APIManager'
import { Book, BookQuery } from '../../Types/Types'
import { Tags } from '../getRecomendations/getRecomendations'

export type CategoryBooks = {
    title: string
    rank: number
    books: Book[]
}

export type RecomendedBooks = {
    categories: CategoryBooks[]
    authors: CategoryBooks[]
}

const getRecommendedBooks = async function (tags: Tags) {
    const books: RecomendedBooks = {
        categories: [],
        authors: []
    }
    if (tags.categories) {
        for (const category in tags.categories) {
            try {
                const categoryBook: CategoryBooks = {
                    title: category,
                    rank: tags.categories[category],
                    books: []
                }
                const stringQuery = 'subject:' + category
                const booksRes = await apiManager.searchBooks(stringQuery)
                if (!booksRes.err) {
                    categoryBook.books = booksRes
                    books.categories.push(categoryBook)
                } else {
                    return booksRes
                }
            } catch (error) {
                return error
            }
        }
    }
    if (tags.authors) {
        for (const author in tags.authors) {
            try {
                const authorBook: CategoryBooks = {
                    title: 'More books from ' + author,
                    rank: tags.authors[author],
                    books: []
                }
                const stringQuery = 'inauthor:' + author
                const booksRes = await apiManager.searchBooks(stringQuery)
                if (!booksRes.err) {
                    authorBook.books = booksRes
                    books.categories.push(authorBook)
                }
            } catch (error) {
                return error
            }
        }
    }

    books.categories = books.categories.sort((a, b) => b.rank - a.rank)
    books.authors = books.authors.sort((a, b) => b.rank - a.rank)

    return books
}

export default getRecommendedBooks
