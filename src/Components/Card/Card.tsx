import React from 'react'
import Title from '../Title/Title'
import CardStyled from './CardStyled'

type Props = {
    item: {
        title?: string | undefined
        img?: string | undefined
        text?: string
    }
}

const Card: React.FC<Props> = ({ item }) => {
    const { title, img, text } = item
    return (
        <CardStyled>
            <div className="img">{img ? <img src={img} /> : null}</div>
            <div className="contentContainer">
                <div className="titleContainer">
                    <Title>{title}</Title>
                </div>
                <div className="descriptionContainer">{text}</div>
            </div>
        </CardStyled>
    )
}

export default Card
