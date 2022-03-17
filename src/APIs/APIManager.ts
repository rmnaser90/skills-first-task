import axios from 'axios'

type Book = {
    volumeInfo: {
        title: string
        description: string
        imageLinks:{
            thumbnail:string
        }
    }
}
class APIManager {
    async getBooks() {
        const data = await axios.get('https://www.googleapis.com/books/v1/volumes?q=michio')
        const filteredData = data.data.items.filter((book:Book)=>book.volumeInfo.title && book.volumeInfo.description)
        return filteredData.map((book: Book) => {
            return { title: book.volumeInfo.title, text: book.volumeInfo.description, img:book.volumeInfo.imageLinks.thumbnail}
        })
    }
}

export default APIManager
