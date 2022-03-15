import React from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import Title from '../../Components/Title/Title'
import TopNab from '../../Features/TopNav/TopNab'
import HomePageStyled from './HomePageStyled'

type Props = {
    viewportHeight: number
}
const Homepage: React.FC<Props> = ({ viewportHeight }) => {
    return (
        <HomePageStyled viewportHeight={viewportHeight}>
            <TopNab />
            <div className="headlineContainer">
                <Title fontSize="50px">Headline Text</Title>
                <Title fontSize="50px">Headline Text 2 lines</Title>
                <div className="actionContainer">
                    <ButtonP>Get started</ButtonP>
                </div>
            </div>
        </HomePageStyled>
    )
}

export default Homepage
