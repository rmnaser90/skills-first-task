import axios from 'axios'
import { Book, ApiBook } from '../Types/Types'

const books: Book[] = [
    {
        title: 'Groups and Combinatorics',
        text: "In honor of Professor Michio Suzuki's 70th birthda…hers who shared close ties with Professor Suzuki.",
        img: 'http://books.google.com/books/content?id=i_nuAAAAM…J&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    {
        title: 'Physics of the Future',
        text: "The international bestselling author of Physics of…cently presented the BBC's popular series 'Time'.",
        img: 'http://books.google.com/books/content?id=MLkHa1KZF…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    {
        title: 'Hyperspace',
        text: 'Already thoroughly familiar to the seasoned scienc…stallized big ideas, and shaped the way we think.',
        img: 'http://books.google.com/books/content?id=nJNNDwAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    {
        title: 'Physics of the Impossible',
        text: 'Teleportation, time machines, force fields, and in…ts of human ingenuity and scientific possibility.',
        img: 'http://books.google.com/books/content?id=ube-MQcFF…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    {
        title: 'Visions',
        text: 'New in paperback, from the bestselling author of H…ture into the future of our planet and ourselves.',
        img: 'http://books.google.com/books/content?id=qSneq3DFI…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    }
]
const user = {
    fullName: 'Rami Naser Aldin',
    email: 'rami@moday.com',
    books,
    err: false,
    msg: ''
}

class APIManager {
    async getBooks() {
        const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=michio')
        const filteredData = res.data.items.filter(
            (book: ApiBook) => book.volumeInfo.title && book.volumeInfo.description
        )
        return filteredData.map((apiBook: ApiBook) => {
            const book: Book = {
                title: apiBook.volumeInfo.title,
                text: apiBook.volumeInfo.description,
                img: apiBook.volumeInfo.imageLinks.thumbnail
            }
            return book
        })
    }
    async searchBooks(key:string) {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${key}&maxResult=40`)
        const filteredData = res.data.items.filter(
            (book: ApiBook) => book.volumeInfo.title && book.volumeInfo.description
        )
        return filteredData.map((apiBook: ApiBook) => {
            const book: Book = {
                title: apiBook.volumeInfo.title,
                text: apiBook.volumeInfo.description,
                img: apiBook.volumeInfo.imageLinks.thumbnail
            }
            return book
        })
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
