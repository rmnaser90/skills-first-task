import axios from 'axios'
import { Book, ApiBook } from '../Types/Types'

class APIManager {
    async getBooks() {
        const data = await axios.get('https://www.googleapis.com/books/v1/volumes?q=michio')
        const filteredData = data.data.items.filter(
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
}

export default APIManager
