import React from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import Title from '../../Components/Title/Title'
import TopNab from '../../Features/TopNav/TopNab'
import HomePageStyled from './HomePageStyled'
import Card from '../../Components/Card/Card'
import FeatureCard from '../../Components/FeatureCard/FeatureCard'
import Paragraph from '../../Components/Paragraph/Paragraph'
import { useNavigate } from 'react-router-dom'
import {  State } from '../../../Types/Types'
import { useSelector } from 'react-redux'
import Carousel from '../../Components/Carousel/Carousel'
type Props = {
    viewportHeight: number
    viewportWidth: number
}

const Homepage: React.FC<Props> = ({ viewportHeight,viewportWidth }) => {
    const navigate = useNavigate()
    const items = useSelector((state: State) => state.books)
    const isLoggedIn = useSelector((state: State) => state.isLoogedIn)
    const { fullName } = useSelector((state: State) => state.user)

    const getStarted = function () {
        navigate(isLoggedIn ? 'function' : 'signup')
    }

    return (
        <HomePageStyled viewportHeight={viewportHeight}>
            <TopNab />
            <div className="mainContainer">
                <div className="headlineContainer">
                    <div className="leftSection">
                        <Title fontSize="50px" className="title">
                            Netboox
                        </Title>
                        <Title className="subtitle">
                            {isLoggedIn ? 'Welcome back ' + fullName : 'All your books in one place '}
                        </Title>
                        <div className="actionContainer">
                            <ButtonP onClick={getStarted}>Get started</ButtonP>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <CircleFrame
                            width={viewportWidth > 768 ? '474px' : '256px'}
                            height={viewportWidth > 768 ? '474px' : '256px'}
                        />
                    </div>
                </div>
                <div className="inspirationContainer">
                    <Title>This week inspiration</Title>
                    <Carousel>
                        {items &&
                            items.map((item, i) => (
                                <Card
                                    item={item}
                                    key={i}
                                    width="197px"
                                    height="100%"
                                    onClick={() => navigate('function')}
                                />
                            ))}
                    </Carousel>
                </div>
                <div className="featuresContainer">
                    <div className="featuresHeader">
                        <Title>Our features</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus eligendi corporis
                            possimus eveniet obcaecati labore commodi beatae earum illo, impedit praesentium corrupti
                            dolor blanditiis dicta iste rerum aliquid minima?
                        </Paragraph>
                    </div>
                    <div />
                    <FeatureCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolor molestiae? Quos
                        pariatur dicta recusandae facere quod, aspernatur doloribus iusto. Repellendus laborum sapiente
                        deleniti adipisci eius sed ut dolorum omnis.
                    </FeatureCard>
                    <FeatureCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolor molestiae? Quos
                        pariatur dicta recusandae facere quod, aspernatur doloribus iusto. Repellendus laborum sapiente
                        deleniti adipisci eius sed ut dolorum omnis.
                    </FeatureCard>
                    <FeatureCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolor molestiae? Quos
                        pariatur dicta recusandae facere quod, aspernatur doloribus iusto. Repellendus laborum sapiente
                        deleniti adipisci eius sed ut dolorum omnis.
                    </FeatureCard>
                </div>
            </div>
        </HomePageStyled>
    )
}

export default Homepage
