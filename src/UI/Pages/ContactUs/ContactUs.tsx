import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import ButtonP from '../../Components/ButtonP/ButtonP'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import Input from '../../Components/Inputs/Input'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Title from '../../Components/Title/Title'
import SignUpHeader from '../../Features/SignUpHeader/SignUpHeader'
import SignUpStyled from './ContactUsStyled'
import { ContactUsForm } from '../../../Types/Types'
import { validate } from './ValidationSchema'
import apiManager from '../../../APIs/APIManager'
const ContactUs: React.FC = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onSubmit = async (values: ContactUsForm) => {
        if (isLoading) return
        setIsLoading(true)
        await apiManager.contactUs(values)
        setIsLoading(false)
        navigate('/')
    }
    const initialValues: ContactUsForm = {
        fullName: '',
        email: '',
        message: '',
        q: ''
    }

    return (
        <SignUpStyled>
            {isLoading && <div className="loadingLayer" />}
            <SignUpHeader />
            <div className="contactUsForm">
                <div className="formHeader">
                    <Title>Contact Us</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est veritatis, laboriosam
                        ut sapiente nemo adipisci. Ut dolor nulla quisquam corrupti. Similique omnis aspernatur,
                        repudiandae inventore rem harum officiis. Aut!
                    </Paragraph>
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validate} validateOnChange>
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="inputsContainer">
                                <div className="inputContainer">
                                    <InputLabel text="Full Name" />
                                    <Input
                                        value={values.fullName}
                                        placeholder="Full Name"
                                        name="fullName"
                                        error={errors.fullName}
                                        onChange={handleChange}
                                        touched={touched.fullName}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <InputLabel text="Email" />
                                    <Input
                                        value={values.email}
                                        name="email"
                                        type="email"
                                        error={errors['email']}
                                        touched={touched.email}
                                        placeholder="Email Address"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <InputLabel text="Book title" />
                                    <Input
                                        value={values.q}
                                        name="q"
                                        type="text"
                                        placeholder="Book title"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <InputLabel text="Message" />

                                    <textarea
                                        className="messageInput"
                                        value={values.message}
                                        name="message"
                                        placeholder="How may we help you?"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="actionsContainer">
                                <div className="buttonContainer">
                                    <ButtonP onClick={handleSubmit}>Submit</ButtonP>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </SignUpStyled>
    )
}

export default ContactUs
