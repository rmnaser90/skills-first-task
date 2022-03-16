import React from 'react'
import InputStyled from './InputStyled'

type Props = {
    value?: string | number | readonly string[] | undefined
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string | undefined
}

const Input: React.FC<Props> = ({ value, onChange, placeholder,type }) => {
    return (
        <InputStyled>
            <input value={value} type={type} onChange={onChange} placeholder={placeholder} />
        </InputStyled>
    )
}

export default Input
