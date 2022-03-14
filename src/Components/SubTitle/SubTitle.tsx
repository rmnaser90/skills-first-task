import React from 'react'
import SubTitleStyled from './SubTitleStyled'
interface Props {
    children: string
}

const SubTitle: React.FC<Props> = ({ children }) => {
    return <SubTitleStyled >{children}</SubTitleStyled>
}

export default SubTitle
