import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonS from '../../Components/ButtonS/ButtonS'
import Card from '../../Components/Card/Card'
import SubTitle from '../../Components/SubTitle/SubTitle'
import Title from '../../Components/Title/Title'
import HeaderSection from '../../Features/HeaderSection/HeaderSection'
import FunctionPageStyled from './FunctionPageStyled'
import { State } from '../../../Types/Types'
import Input from '../../Components/Inputs/Input'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import InputStyled from '../../Components/Inputs/InputStyled'
import Dispatcher from '../../../StoreManager/dispatcher'
type Props = {
    viewportHeight: number
}
const FunctionPage: React.FC<Props> = ({ viewportHeight }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('Filter')
    const [searchValue, setSearchValue] = useState<string>('')
    const items = useSelector((state: State) => state.searchBooks)
    const { handleSearchBook } = Dispatcher(useDispatch())


    const handleChange: React.ChangeEventHandler<HTMLInputElement> = function ({ target }) {
        const {value} = target
        setSearchValue(value)
    }
    const handleKeySubmit: React.KeyboardEventHandler<HTMLInputElement> = function ({key}) {
        if (key == 'Enter') {
            handleSearchBook(searchValue)
        }
    }
    return (
        <FunctionPageStyled viewportHeight={viewportHeight}>
            <HeaderSection />
            <div className="resultsContainer">
                <div className="inputContainer">
                    <InputStyled>
                        <input onKeyPress={handleKeySubmit} value={searchValue} onChange={handleChange} name="search" placeholder="Search by Author, Genre, year, title" />
                    </InputStyled>
                </div>
                <Title>All Results</Title>

                <SubTitle>Sort by</SubTitle>
                <div className="actionsContainer">
                    <ButtonS onClick={() => setSelectedFilter('Filter')} showIcon={selectedFilter == 'Filter'}>
                        Filter
                    </ButtonS>
                    <ButtonS onClick={() => setSelectedFilter('Date')} showIcon={selectedFilter == 'Date'}>
                        Date
                    </ButtonS>
                    <ButtonS onClick={() => setSelectedFilter('Type')} showIcon={selectedFilter == 'Type'}>
                        Type
                    </ButtonS>
                    <ButtonS onClick={() => setSelectedFilter('Auther')} showIcon={selectedFilter == 'Auther'}>
                        Auther
                    </ButtonS>
                    <ButtonS onClick={() => setSelectedFilter('Category')} showIcon={selectedFilter == 'Category'}>
                        Category
                    </ButtonS>
                </div>
            </div>
            <div className="cardsContainer">
                {items && items.map((item, i) => <Card key={i} item={item} className="cardContainer" />)}
            </div>
        </FunctionPageStyled>
    )
}

export default FunctionPage
