import React from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import Title from '../../Components/Title/Title'
import TopNab from '../../Features/TopNav/TopNab'
import HomePageStyled from './HomePageStyled'
import Card from '../../Components/Card/Card'
import LeftArrowButton from '../../Components/LeftArrowButton/LeftArrowButton'
import RightArrowButton from '../../Components/RightArrowButton/RightArrowButton'
import FeatureCard from '../../Components/FeatureCard/FeatureCard'
import Paragraph from '../../Components/Paragraph/Paragraph'
import { useNavigate } from "react-router-dom";

type Props = {
    viewportHeight: number
    items: {
        title: string
        text: string
    }[]
}
const Homepage: React.FC<Props> = ({ viewportHeight, items }) => {
    const navigate = useNavigate()
    return (
        <HomePageStyled viewportHeight={viewportHeight}>
            <TopNab />
            <div className="mainContainer">
                <div className="headlineContainer">
                    <Title fontSize="50px">Headline Text</Title>
                    <Title fontSize="50px">Headline Text 2 lines</Title>
                    <div className="actionContainer">
                        <ButtonP onClick={()=>navigate('signup')}>Get started</ButtonP>
                    </div>
                    <div className="imgContainer">
                        <CircleFrame />
                    </div>
                </div>
                <div className="inspirationContainer">
                    <Title>This week inspiration</Title>
                    <div className="itemsContainer">
                        {items.map((item, i) => (
                            <Card item={item} key={i} width="197px" height='100%' onClick={()=>navigate('function')}  />
                        ))}
                    </div>
                    <div className="navbtns">
                            <LeftArrowButton/>
                            <RightArrowButton/>
                    </div>
                </div>
                <div className="featuresContainer">
                    <div className="featuresHeader">
                        <Title>Our features</Title>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus eligendi corporis possimus eveniet obcaecati labore commodi beatae earum illo, impedit praesentium corrupti dolor blanditiis dicta iste rerum aliquid minima?</Paragraph>
                    </div>
                    <FeatureCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolor molestiae? Quos pariatur dicta recusandae facere quod, aspernatur doloribus iusto. Repellendus laborum sapiente deleniti adipisci eius sed ut dolorum omnis.</FeatureCard>
                    <FeatureCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolor molestiae? Quos pariatur dicta recusandae facere quod, aspernatur doloribus iusto. Repellendus laborum sapiente deleniti adipisci eius sed ut dolorum omnis.</FeatureCard>
                    <FeatureCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolor molestiae? Quos pariatur dicta recusandae facere quod, aspernatur doloribus iusto. Repellendus laborum sapiente deleniti adipisci eius sed ut dolorum omnis.</FeatureCard>
                </div>

            </div>
        </HomePageStyled>
    )
}

export default Homepage
