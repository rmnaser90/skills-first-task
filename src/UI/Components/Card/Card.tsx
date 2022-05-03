import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import Title from '../Title/Title'
import CardStyled from './CardStyled'
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

const Card: React.FC<Props> = ({ item, width, height, onClick, className, showAddBtn }) => {
    const { title, img, text } = item
    const { addToBookShelf,removeFromBookShelf } = Dispatcher(useDispatch())
    const { user } = useSelector((state: State) => state)
    const isFavorite = function (book: Book, user: User) {
        return user.books?.map(b=>b.isbn10).includes(book.isbn10)
    }

    const addBookHandler = async () => {
        if (item.isbn10) {
           await addToBookShelf(item.isbn10.toString())
        }
    }
    const removeBookHandler = async ()=>{
        if (item.isbn10) {
           await removeFromBookShelf(item.isbn10.toString())
        }
    }
    return (
        <CardStyled role={'grid'} width={width} height={height} onClick={onClick} className={className}>
            <div role={'gridcell'} className="img">
                {img && <img src={img} />}
                {showAddBtn &&
                    (isFavorite(item,user) ? (
                        <FontAwesomeIcon icon={faHeart} className="addBtn" onClick={removeBookHandler} />
                    ) : (
                        <FontAwesomeIcon icon={faHeart} className="removeBtn" onClick={addBookHandler} />
                    ))}
            </div>
            <div role={'gridcell'} className="contentContainer">
                <div className="titleContainer">{width ? <SubTitle>{title}</SubTitle> : <Title>{title}</Title>}</div>
                <div className="descriptionContainer">{text}</div>
            </div>
        </CardStyled>
    )
}

export default Card
