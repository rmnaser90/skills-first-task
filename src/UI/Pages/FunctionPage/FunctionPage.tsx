import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonS from '../../Components/ButtonS/ButtonS'
import Card from '../../Components/Card/Card'
import SubTitle from '../../Components/SubTitle/SubTitle'
import Title from '../../Components/Title/Title'
import HeaderSection from '../../Features/HeaderSection/HeaderSection'
import FunctionPageStyled from './FunctionPageStyled'
import { State } from '../../../Types/Types'
import InputStyled from '../../Components/Inputs/InputStyled'
import Dispatcher from '../../../StoreManager/dispatcher'
import { useNavigate } from 'react-router-dom'
import BookContainer from '../../Components/Book/BookContainer'
import CardSkeleton from '../../Components/CardSkeleton/CardSkeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
type Props = {
    viewportHeight: number
}
const FunctionPage: React.FC<Props> = ({ viewportHeight }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('Filter')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const searchBooks = useSelector((state: State) => state.searchBooks)
    const books = useSelector((state: State) => state.books)
    const items = searchBooks.length == 0 ? books : searchBooks
    const { handleSearchBook } = Dispatcher(useDispatch())
    const { isLoogedIn } = useSelector((state: State) => state)
    const filters = ['Filter', 'Date', 'Type', 'Auther', 'Category']
    const [searchValue, setSearchValue] = useState<string>('')
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = function ({ target }) {
        const { value } = target
        setSearchValue(value)
    }
    const handleKeySubmit: React.KeyboardEventHandler<HTMLInputElement> = async function ({ key }) {
        if (!searchValue) return
        if (key == 'Enter' && !isLoading) {
            setIsLoading(true)
            await handleSearchBook(searchValue)
            setIsLoading(false)
        }
    }
    const handleSearchClick = async function () {
        if (isLoading || !searchValue) return
        setIsLoading(true)
        await handleSearchBook(searchValue)
        setIsLoading(false)
    }

    return (
        <FunctionPageStyled viewportHeight={viewportHeight}>
            <HeaderSection />
            <div className="resultsContainer">
                <div className="inputContainer">
                    <InputStyled>
                        <input
                            onKeyPress={handleKeySubmit}
                            value={searchValue}
                            onChange={handleChange}
                            name="search"
                            placeholder="Search by Author, Genre, year, title"
                        />
                        <FontAwesomeIcon className="searchIcon" icon={faSearch} onClick={handleSearchClick} />
                    </InputStyled>
                </div>
                <Title>All Results ({items.length})</Title>

                <SubTitle>Sort by</SubTitle>
                <div className="actionsContainer">
                    {filters.map((filter, i) => (
                        <ButtonS
                            key={i}
                            onClick={setSelectedFilter}
                            name={filter}
                            showIcon={selectedFilter == filter}
                        />
                    ))}
                </div>
            </div>
            <div className="cardsContainer">
                {isLoading ? (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                ) : searchBooks.length !== 0 ? (
                    items.map((item, i) => (
                        <BookContainer key={i} item={item} showAddBtn={isLoogedIn} className="cardContainer" />
                    ))
                ) : (
                    <>
                        <div className="noResults"> No results were found!</div>
                        {items.map((item, i) => (
                            <BookContainer key={i} item={item} showAddBtn={isLoogedIn} className="cardContainer" />
                        ))}
                    </>
                )}
            </div>
        </FunctionPageStyled>
    )
}

export default FunctionPage
