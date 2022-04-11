import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import Title from '../Title/Title'
import CardStyled from './CardStyled'
import { Book } from '../../../Types/Types'

type Props = {
    item: Book
    width?: string
    height?: string
    onClick?: () => void
    className?: string
}

const Card: React.FC<Props> = ({ item, width, height, onClick, className }) => {
    const { title, img, text } = item
    return (
        <CardStyled role={'grid'} width={width} height={height} onClick={onClick} className={className}>
            <div role={'gridcell'} className="img">
                {img ? <img src={img} /> : null}
            </div>
            <div role={'gridcell'} className="contentContainer">
                <div className="titleContainer">{width ? <SubTitle>{title}</SubTitle> : <Title>{title}</Title>}</div>
                <div className="descriptionContainer">{text}</div>
            </div>
        </CardStyled>
    )
}

export default Card
