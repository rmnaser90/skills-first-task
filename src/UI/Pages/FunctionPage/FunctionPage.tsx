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
type Props = {
    viewportHeight: number
}
const FunctionPage: React.FC<Props> = ({ viewportHeight }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('Filter')
    const [searchValue, setSearchValue] = useState<string>('')
    const items = useSelector((state: State) => state.searchBooks)
    const { handleSearchBook } = Dispatcher(useDispatch())
    const { isLoogedIn } = useSelector((state: State) => state)
    const navigate = useNavigate()
    const filters = ['Filter', 'Date', 'Type', 'Auther', 'Category']
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = function ({ target }) {
        const { value } = target
        setSearchValue(value)
    }
    const handleKeySubmit: React.KeyboardEventHandler<HTMLInputElement> = function ({ key }) {
        if (key == 'Enter') {
            handleSearchBook(searchValue)
        }
    }
    useEffect(() => {
        if (!isLoogedIn) {
            navigate('/')
        }
    }, [isLoogedIn])
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
                {items && items.map((item, i) => <Card key={i} item={item} className="cardContainer" />)}
            </div>
        </FunctionPageStyled>
    )
}

export default FunctionPage
