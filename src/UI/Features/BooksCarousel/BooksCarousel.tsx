import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import { Book } from '../../../Types/Types'
import Card from '../../Components/Card/Card'
import Title from '../../Components/Title/Title'
import BookContainer from '../../Components/Book/BookContainer'
import CardSkeleton from '../../Components/CardSkeleton/CardSkeleton'

interface Props {
    books?: Book[]
    title: string
    className?: string
    showAddBtn?: boolean
    isloading?: boolean
    onClick?: () => void
}
const BooksCarousel: React.FC<Props> = ({ books, title, showAddBtn, className, onClick, isloading }) => {
    const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className={className || ''}>
            <Title>{title}</Title>
            <Carousel hideNav={!(books && !isloading)}>
                {books?.length !== 0 && books && !isloading
                    ? books.map((item, i) => (
                          <BookContainer
                              showAddBtn={showAddBtn}
                              item={item}
                              key={i}
                              width="197px"
                              height="100%"
                              onClick={onClick}
                          />
                      ))
                    : skeletons.map((s, i) => <CardSkeleton key={i} />)}
            </Carousel>
        </div>
    )
}

export default BooksCarousel
