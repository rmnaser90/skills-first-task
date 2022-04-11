import React from 'react'
import ButtonStyled from './ButtonStyled'

type Props = {
    name: string
    onClick: (name: string) => void
    children?: string
    showIcon?: boolean
}
const ButtonS: React.FC<Props> = ({ children, showIcon, onClick, name }) => {
    const setFilter = () => onClick(name)

    return (
        <ButtonStyled onClick={setFilter} showIcon={showIcon}>
            {showIcon ? <div className="icon" role={'img'} /> : null}
            {children}
        </ButtonStyled>
    )
}

export default ButtonS
