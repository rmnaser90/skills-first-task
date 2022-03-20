import React from 'react'
import InputLabelStyled from './InputLabelStyled'

const InputLabel: React.FC<{ text: string }> = ({ text }) => {
    return <InputLabelStyled>{text}</InputLabelStyled>
}

export default InputLabel
