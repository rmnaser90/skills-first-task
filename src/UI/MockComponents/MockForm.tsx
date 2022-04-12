import { Form, Formik } from "formik";
import React from 'react'


const mockSubmit = jest.fn()
const MockForm:React.FC= ({children}) => {
  return (
    <Formik initialValues={{firstname:''}} onSubmit={mockSubmit}>
        {({})=><Form>
            
            
            {children}
            
            </Form>}
    </Formik>
  )
}

export default MockForm