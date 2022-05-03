import React from 'react'
import BookStyled from './BookStyled'
import { Book, State, User } from '../../../Types/Types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Dispatcher from '../../../StoreManager/dispatcher'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
    item: Book
    width?: string
    height?: string
    onClick?: () => void
    className?: string
    showAddBtn?: boolean
}

const BookContainer: React.FC<Props> = ({ item, width, height, onClick, className, showAddBtn }) => {
    const { title, img } = item
    const { addToBookShelf, removeFromBookShelf } = Dispatcher(useDispatch())
    const { user } = useSelector((state: State) => state)
    const isFavorite = function (book: Book, user: User) {
        return user.books?.map((b) => b.isbn10).includes(book.isbn10)
    }

    const addBookHandler = async () => {
        console.log("trying to add");
        
        if (item.isbn10) {
            console.log("isbn available: "+item.isbn10);
            await addToBookShelf(item.isbn10.toString())
        }
    }
    const removeBookHandler = async () => {
        if (item.isbn10) {
            await removeFromBookShelf(item.isbn10.toString())
        }
    }
    return (
        <BookStyled role={'grid'} width={width} height={height} onClick={onClick} className={className}>
            <div role={'gridcell'} className="img">
                {img && <img src={img} />}
                <div className="btnContainer">
                    {showAddBtn &&
                        (isFavorite(item, user) ? (
                            <FontAwesomeIcon icon={faHeart} className="btn addBtn" onClick={removeBookHandler} />
                        ) : (
                            <FontAwesomeIcon icon={faHeart} className="btn removeBtn" onClick={addBookHandler} />
                        ))}
                </div>
            </div>
            <div role={'gridcell'} className="contentContainer">
                {title}
            </div>
        </BookStyled>
    )
}

export default BookContainer
