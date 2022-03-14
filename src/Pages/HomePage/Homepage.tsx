import React, { useState } from 'react'
import ButtonS from '../../Components/ButtonS/ButtonS'
import Card from '../../Components/Card/Card'
import SubTitle from '../../Components/SubTitle/SubTitle'
import Title from '../../Components/Title/Title'
import HeaderSection from '../../Features/HeaderSection/HeaderSection'
import HomePageStyled from './HomePageStyled'

const ITEMS = [
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    }
]
const Homepage: React.FC = () => {
    const [items, setItems] = useState(ITEMS)
    const [selectedFilter, setSelectedFilter] = useState<string>('Filter')

    return (
        <HomePageStyled>
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
            <div className="cardsContainer">
                {items.map((item, i) => (
                    <Card key={i} item={item} />
                ))}
            </div>
        </HomePageStyled>
    )
}

export default Homepage
