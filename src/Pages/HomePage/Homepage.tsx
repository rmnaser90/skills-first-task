import React from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import Title from '../../Components/Title/Title'
import TopNab from '../../Features/TopNav/TopNab'
import HomePageStyled from './HomePageStyled'
import Card from '../../Components/Card/Card'
import LeftArrowButton from '../../Components/LeftArrowButton/LeftArrowButton'
import RightArrowButton from '../../Components/RightArrowButton/RightArrowButton'

type Props = {
    viewportHeight: number
    items: {
        title: string
        text: string
    }[]
}
const Homepage: React.FC<Props> = ({ viewportHeight, items }) => {
    return (
        <HomePageStyled viewportHeight={viewportHeight}>
            <TopNab />
            <div className="mainContainer">
                <div className="headlineContainer">
                    <Title fontSize="50px">Headline Text</Title>
                    <Title fontSize="50px">Headline Text 2 lines</Title>
                    <div className="actionContainer">
                        <ButtonP>Get started</ButtonP>
                    </div>
                    <div className="imgContainer">
                        <CircleFrame />
                    </div>
                </div>
                <div className="inspirationContainer">
                    <Title>This week inspiration</Title>
                    <div className="itemsContainer">
                        {items.map((item, i) => (
                            <Card item={item} key={i} width="197px" height='100%' />
                        ))}
                    </div>
                    <div className="navbtns">
                            <LeftArrowButton/>
                            <RightArrowButton/>
                    </div>
                </div>
            </div>
        </HomePageStyled>
    )
}

export default Homepage
