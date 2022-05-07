import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import apiManager from '../../../APIs/APIManager'
import Dispatcher from '../../../StoreManager/dispatcher'
import { Book, State, User } from '../../../Types/Types'
import ButtonP from '../../Components/ButtonP/ButtonP'
import SubTitle from '../../Components/SubTitle/SubTitle'
import Title from '../../Components/Title/Title'
import ReviewsContainer from '../../Features/Reviews/ReviewsContainer'
import BookPageStyled from './BookPageStyled'
type Props = {
    viewportHeight: number
    viewportWidth: number
}
const BookPage: React.FC<Props> = ({ viewportHeight }) => {
    const navigate = useNavigate()
    const { addToBookShelf, removeFromBookShelf } = Dispatcher(useDispatch())
    const { selectedBook, user, isLoogedIn } = useSelector((state: State) => state)
    const { img, author, title, text, publishedDate, previewLink, category, isbn10, subtitle } = selectedBook

    const [reviews, setReviews] = useState([])
    const isFavorite = function (book: Book, user: User) {
        return user.books?.map((b) => b.isbn10).includes(book.isbn10)
    }
    const handleAddToBookShelf = async function () {
        if (isbn10) {
            await addToBookShelf(isbn10.toString())
        }
    }
    const handleremoveFromBookShelf = async function () {
        if (isbn10) {
            await removeFromBookShelf(isbn10.toString())
        }
    }
    const getReviews = async function () {
        if (isbn10) {
            const reviewsDb = await apiManager.getReviews(isbn10.toString())
            setReviews(reviewsDb)
        }
    }
    useEffect(() => {
        getReviews()
    }, [])

    useEffect(() => {
        if (!title) {
            navigate('/')
        }
    })
    return (
        <BookPageStyled viewportHeight={viewportHeight}>
            <div className="header">
                <div className="detailsContainer">
                    <div className="titlesContainer">
                        <Title>{title}</Title>
                        <p className="subtitle">{subtitle}</p>
                    </div>
                    <div className="infoContainer">
                        <div className="details">
                            <span>Auther: </span>
                            {author}
                        </div>
                        <div className="details">
                            <span>Published date: </span>
                            {publishedDate}
                        </div>
                        <div className="details">
                            <span>Category: </span> {category}
                        </div>
                    </div>
                    <div className="details description">
                        <span>Description: </span>
                        <i>{text}</i>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={img} />
                    <div className="btnContainer">
                        <ButtonP>
                            <a href={previewLink} className="link" rel="noreferrer" target={'_blank'}>
                                Preview
                            </a>
                        </ButtonP>
                        {isLoogedIn &&
                            (isFavorite(selectedBook, user) ? (
                                <ButtonP onClick={handleremoveFromBookShelf}>Remove from shelf</ButtonP>
                            ) : (
                                <ButtonP onClick={handleAddToBookShelf}>Add to shelf</ButtonP>
                            ))}
                    </div>
                </div>
            </div>
            <ReviewsContainer reviews={reviews}/>
        </BookPageStyled>
    )
}

export default BookPage
