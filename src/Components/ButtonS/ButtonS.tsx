import React from 'react'
import ButtonStyled from './ButtonStyled'

type Props = {
    onClick?: () => void
    children?: string
    showIcon?: boolean | undefined
}
const ButtonS: React.FC<Props> = ({ children,showIcon,onClick }) => {
    return <ButtonStyled onClick={onClick} showIcon={showIcon}>{showIcon?<div className='icon'/>:null}{children}</ButtonStyled>
}

export default ButtonS
