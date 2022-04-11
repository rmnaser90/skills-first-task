import React, { ReactComponentElement } from 'react'
import { Book } from '../../Types/Types'
import Card from '../Components/Card/Card'
export const MockBookNoImg: Book = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium nesciunt molestias quasi quo, ad maxime totam optio obcaecati voluptatem, quae reprehenderit! Enim sit libero nihil nulla atque, sint dolores?',
    title: 'best book',
    img: ''
}

export const MockBookWithImg: Book = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium nesciunt molestias quasi quo, ad maxime totam optio obcaecati voluptatem, quae reprehenderit! Enim sit libero nihil nulla atque, sint dolores?',
    title: 'best book',
    img: 'http://books.google.com/books/content?id=MLkHa1KZF4wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
}

export const getMockCards = function (number: number) {
    const cards = []
    const books = []
    for (let i = 0; i < number; i++) {
        const book:Book = { ...MockBookWithImg, title: 'book' + i}
        cards.push(<Card key={i} item={book} height="1000px" width='500px'/>)
        books.push(book)
    }
    return {cards,books}
}
