import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import apiManager from '../../../APIs/APIManager'
import { State } from '../../../Types/Types'
import Avatar from '../../Components/Avatar/Avatar'
import ButtonP from '../../Components/ButtonP/ButtonP'
import InputStyled from '../../Components/Inputs/InputStyled'
import Title from '../../Components/Title/Title'
import ReviewsContainerStyled from './ReviewsContainerStyled'

interface Props {
    reviews?: any[]
}

const ReviewsContainer: React.FC<Props> = () => {
    const { selectedBook, user, isLoogedIn } = useSelector((state: State) => state)
    const [searchValue, setSearchValue] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [reviews, setReviews] = useState<any[]>([])

    const getReviews = async function () {
        if (selectedBook.isbn10) {
            const reviewsDb = await apiManager.getReviews(selectedBook.isbn10.toString())
            setReviews(reviewsDb)
        }
    }
    const handleRemoveReview = async function (reviewId: string) {
        const answer = confirm('Are you sure you want to delete this review?')
        if (answer) {
            const response = await apiManager.removeReview(reviewId)
            if (!response.err) {
                await getReviews()
            }
        }
    }
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = function ({ target }) {
        const { value } = target
        setSearchValue(value)
    }
    const handleKeySubmit: React.KeyboardEventHandler<HTMLInputElement> = async function ({ key }) {
        if (!searchValue || !selectedBook.isbn10 || isLoading) return
        if (key == 'Enter' && !isLoading) {
            setIsLoading(true)
            await apiManager.addReview(selectedBook.isbn10.toString(), searchValue)
            setIsLoading(false)
            getReviews()
            setSearchValue('')
        }
    }
    const handleSearchClick = async function () {
        if (!searchValue || !selectedBook.isbn10 || isLoading) return
        setIsLoading(true)
        await apiManager.addReview(selectedBook.isbn10.toString(), searchValue)
        setIsLoading(false)
        getReviews()
        setSearchValue('')
    }
    useEffect(() => {
        getReviews()
    }, [])

    return (
        <ReviewsContainerStyled>
            <div className="reviewsHeader">
                <Title>Reviews ({reviews.length})</Title>
            </div>
            <hr />
            {isLoogedIn && (
                <div className="inputsContainer">
                    <textarea
                        className="messageInput"
                        value={searchValue}
                        onChange={handleChange}
                        name="search"
                        placeholder={'What do you think about ' + selectedBook.title + ' ?'}
                    />

                    <div className="btn">
                        <ButtonP onClick={handleSearchClick}>Add review</ButtonP>
                    </div>
                </div>
            )}
            <div className="reviews">
                {reviews?.map((review, i) => (
                    <div key={i} className="reviewContainer">
                        {user.id == review.user.id && (
                            <FontAwesomeIcon
                                onClick={() => handleRemoveReview(review.id)}
                                className="deleteBtn"
                                icon={faTrash}
                            />
                        )}
                        <div className="reviewerContainer">
                            <Avatar name={review.user.fullName} />
                            <h2>{user.id == review.user.id ? 'You' : review.user.fullName}</h2>
                        </div>
                        <div className="text">{review.text}</div>
                    </div>
                ))}
            </div>
        </ReviewsContainerStyled>
    )
}

export default ReviewsContainer
