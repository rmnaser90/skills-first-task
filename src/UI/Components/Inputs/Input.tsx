import React, { useEffect } from 'react'
import InputStyled from './InputStyled'
import { ErrorMessage, useField } from 'formik'
type Props = {
    value?: string | number | readonly string[] | undefined
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string | undefined
    name: string
}

const Input: React.FC<Props> = (props) => {
    const { placeholder, type } = props
    const [field, meta] = useField(props)
   
    return (
        <InputStyled invalid={meta.error}>
            <input
                value={field.value}
                name={field.name}
                type={type}
                onChange={field.onChange}
                placeholder={placeholder}
            />
            {meta.error && <div className='errorMsg'>{meta.error}</div>}
            
        </InputStyled>
    )
}

export default Input
