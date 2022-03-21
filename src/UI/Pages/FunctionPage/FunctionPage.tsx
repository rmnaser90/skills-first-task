import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ButtonS from '../../Components/ButtonS/ButtonS'
import Card from '../../Components/Card/Card'
import SubTitle from '../../Components/SubTitle/SubTitle'
import Title from '../../Components/Title/Title'
import HeaderSection from '../../Features/HeaderSection/HeaderSection'
import FunctionPageStyled from './FunctionPageStyled'
import { Book, State } from '../../../Types/Types'
type Props = {
    viewportHeight: number
}
const FunctionPage: React.FC<Props> = ({ viewportHeight }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('Filter')
    const items = useSelector((state: State) => state.books)
    return (
        <FunctionPageStyled viewportHeight={viewportHeight}>
            <HeaderSection />
            <div className="resultsContainer">
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
                    <ButtonS onClick={() => setSelectedFilter('Team')} showIcon={selectedFilter == 'Team'}>
                        Team
                    </ButtonS>
                </div>
            </div>
            <div className="cardsContainer">{items && items.map((item, i) => <Card key={i} item={item} />)}</div>
        </FunctionPageStyled>
    )
}

export default FunctionPage
