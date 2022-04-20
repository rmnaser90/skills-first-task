import axios, { AxiosRequestConfig } from 'axios'
import { Book, ApiBook, Params} from '../Types/Types'

const user = {
    fullName: 'Albert Einstein',
    email: 'rami@moday.com',
    books: [],
    err: false,
    msg: ''
}


class APIManager {
    config: AxiosRequestConfig
    constructor() {
        this.config = {
            baseURL: 'https://www.googleapis.com/books/v1/',
            method: 'GET'
        }
    }
    async getBooks(params?: Params) {
        const res = await axios('/volumes', { ...this.config, params })
        const filteredData = res.data.items.filter(
            (book: ApiBook) =>
                book.volumeInfo?.title && book.volumeInfo?.description && book.volumeInfo?.imageLinks?.thumbnail
        )
        return filteredData.map((apiBook: ApiBook) => {
            const book: Book = {
                title: apiBook.volumeInfo.title,
                text: apiBook.volumeInfo.description,
                img: apiBook.volumeInfo?.imageLinks?.thumbnail
            }
            return book
        })
    }
    
    async searchBooks(key: string) {
        const params: Params = {
            q: key,
            maxResults: 40
        }
        const books = await this.getBooks(params)
        return books
    }

    async authUser(signInForm: { email?: string; password?: string; fullName?: string; confirmPassword?: string }) {
        // simulate db
        // send to back-end for authentication and return user
        const { email, password } = signInForm
        if (email === 'rami@monday.com') {
            return password === 'qweqwe' ? user : { err: true, msg: 'wrong password' }
        } else {
            return { err: true, msg: "user doesn't exist" }
        }
    }
}

export default APIManager
