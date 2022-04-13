import React from 'react'
import ButtonStyled from './ButtonStyled'

type Props = {
    name: string
    onClick: (name: string) => void
    showIcon?: boolean
}
const ButtonS: React.FC<Props> = ({ children, showIcon, onClick, name }) => {
    const setFilter = () => onClick(name)

    return (
        <ButtonStyled onClick={setFilter} showIcon={showIcon}>
            {showIcon && <div className="iconss" role={'img'} /> }
            {name}
        </ButtonStyled>
    )
}

export default ButtonS
