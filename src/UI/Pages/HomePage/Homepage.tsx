import React, { useEffect, useState } from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import Title from '../../Components/Title/Title'
import TopNab from '../../Features/TopNav/TopNab'
import HomePageStyled from './HomePageStyled'
import FeatureCard from '../../Components/FeatureCard/FeatureCard'
import Paragraph from '../../Components/Paragraph/Paragraph'
import { useNavigate } from 'react-router-dom'
import { State } from '../../../Types/Types'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import BooksCarousel from '../../Features/BooksCarousel/BooksCarousel'
import getRecomendations from '../../../Utils/getRecomendations/getRecomendations'
import getRecommendedBooks, { RecomendedBooks } from '../../../Utils/getRecomendedBooks/getRecomendedBooks'
import 'react-loading-skeleton/dist/skeleton.css'
type Props = {
    viewportHeight: number
    viewportWidth: number
}

const Homepage: React.FC<Props> = ({ viewportHeight }) => {
    const navigate = useNavigate()
    const [recommendedBooks, setRecomendedBooks] = useState<RecomendedBooks>({
        categories: [],
        authors: []
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { books, isLoogedIn: isLoggedIn, user } = useSelector((state: State) => state)
    const { fullName } = user

    const getStarted = function () {
        navigate(isLoggedIn ? 'function' : 'signup')
    }

    const handleGetRecommendedBooks = async function () {
        setIsLoading(true)
        const tags = getRecomendations(user)
        const books = await getRecommendedBooks(tags)
        setIsLoading(false)
        setRecomendedBooks(books)
    }

    useEffect(() => {
        if (isLoggedIn) {
            handleGetRecommendedBooks()
        } else {
            setRecomendedBooks({
                categories: [],
                authors: []
            })
        }
    },[isLoggedIn])

    const isDesktop = useMediaQuery({ minWidth: 768 })
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
                        <CircleFrame width={isDesktop ? '474px' : '256px'} height={isDesktop ? '474px' : '256px'} />
                    </div>
                </div>
                <BooksCarousel
                    showAddBtn={isLoggedIn}
                    className="inspirationContainer"
                    books={books}
                    title="This week inspiration"
                />
                {isLoggedIn && (
                    <>
                        <BooksCarousel
                            showAddBtn={isLoggedIn}
                            className="inspirationContainer"
                            books={user.books}
                            title="My Book Shelf"
                        />
                        <div className="recomendationSection">
                            <Title className="recommendedTitle">Recommended for you</Title>
                            <hr />
                            {isLoading && <BooksCarousel title=' ' className="inspirationContainer" />}
                        </div>
                        {recommendedBooks.authors.map(
                            (auther, i) =>
                                auther.books.length > 0 && (
                                    <BooksCarousel
                                        key={i}
                                        showAddBtn={isLoggedIn}
                                        className="inspirationContainer"
                                        books={auther.books}
                                        title={auther.title}
                                    />
                                )
                        )}
                        {recommendedBooks.categories.map(
                            (auther, i) =>
                                auther.books.length > 0 && (
                                    <BooksCarousel
                                        key={i}
                                        showAddBtn={isLoggedIn}
                                        className="inspirationContainer"
                                        books={auther.books}
                                        title={auther.title}
                                    />
                                )
                        )}
                    </>
                )}
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
