import React, { useEffect } from 'react'
import InputStyled from './InputStyled'
import { useField, Field } from 'formik'
type Props = {
    value?: string | number | readonly string[] | undefined
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string | undefined
    name: string
    error?: string
    touched?: boolean
}

const Input: React.FC<Props> = (props) => {
    const { placeholder, type, error, touched,value,name,onChange} = props
useEffect(()=>{
    console.log(error);
    
},[error,touched])
    return (
        <InputStyled invalid={!!(error && touched)}>
            <Field
                value={value}
                name={name}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && touched && <div className="errorMsg">{error}</div>}
        </InputStyled>
    )
}

export default Input
