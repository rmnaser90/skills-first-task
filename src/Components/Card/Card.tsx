import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import Title from '../Title/Title'
import CardStyled from './CardStyled'

type Props = {
    item: {
        title?: string | undefined
        img?: string | undefined
        text?: string
    }
    width?: string
    height?: string
    onClick?:()=>void
}

const Card: React.FC<Props> = ({ item, width, height,onClick }) => {
    const { title, img, text } = item
    return (
        <CardStyled width={width} height={height} onClick={onClick}>
            <div className="img">{img ? <img src={img} /> : null}</div>
            <div className="contentContainer">
                <div className="titleContainer">
                    {width?<SubTitle>{title}</SubTitle>:<Title>{title}</Title>}
                </div>
                <div className="descriptionContainer">{text}asfgasdfadsfasdasdfasdfasdfasdfasdfadfsadfasfasfgasfasdfasdfasdfsdf</div>
            </div>
        </CardStyled>
    )
}

export default Card
