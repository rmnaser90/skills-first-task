import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Form, Formik } from 'formik'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CheckboxStyled from '../../Components/Checkbox/CheckboxStyled'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import Input from '../../Components/Inputs/Input'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Title from '../../Components/Title/Title'
import SignUpHeader from '../../Features/SignUpHeader/SignUpHeader'
import SignUpStyled from './SignUpStyled'
import { State } from '../../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import Dispatcher from '../../../StoreManager/dispatcher'
import { validate } from './ValidationSchema'
import LoadingSpin from 'react-loading-spin'
import colors from '../../Theme/Colors'
const SignUp: React.FC = () => {
    const navigate = useNavigate()
    const { isLoogedIn, forms } = useSelector((state: State) => state)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { signUp } = forms
    const { signUpHandler } = Dispatcher(useDispatch())

    const onSubmit = async (values = signUp) => {
        if (isLoading) return
        setIsLoading(true)
        await signUpHandler(values)
        setIsLoading(false)
    }
    const navigateToSignIn = () => navigate('../signin')
    useEffect(() => {
        if (isLoogedIn) {
            navigate('/')
        }
    }, [isLoogedIn])

    return (
        <SignUpStyled>
            {isLoading && (
                <div className="loadingLayer">
                    <LoadingSpin primaryColor={colors.primary}/>
                </div>
            )}
            <SignUpHeader />
            <div className="signUpForm">
                <div className="formHeader">
                    <Title>Signup</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est veritatis, laboriosam
                        ut sapiente nemo adipisci. Ut dolor nulla quisquam corrupti. Similique omnis aspernatur,
                        repudiandae inventore rem harum officiis. Aut!
                    </Paragraph>
                </div>
                <Formik initialValues={signUp} onSubmit={onSubmit} validationSchema={validate} validateOnChange>
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="inputsContainer">
                                <div className="inputContainer">
                                    <InputLabel text="Full Name" />
                                    <Input
                                        value={values.fullName}
                                        placeholder="Full Name"
                                        name="fullName"
                                        error={errors['fullName']}
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
                                    <InputLabel text="Password" />
                                    <Input
                                        value={values.password}
                                        name="password"
                                        error={errors['password']}
                                        touched={touched.password}
                                        placeholder="Password"
                                        type="password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <InputLabel text="Confirm password" />
                                    <Input
                                        value={values.confirmPassword}
                                        name="confirmPassword"
                                        touched={touched.confirmPassword}
                                        error={errors.confirmPassword}
                                        placeholder="Confirm password"
                                        type="password"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="actionsContainer">
                                <div className="agreementContainer">
                                    <CheckboxStyled
                                        type="checkbox"
                                        name="agreed"
                                        value={values.agreed}
                                        onChange={handleChange}
                                    />
                                    <InputLabel text="I Confirm that I have read the Terms and Conditions" />
                                    <ErrorMessage name="agreed" />
                                </div>
                                <div className="buttonContainer">
                                    <ButtonP onClick={handleSubmit}>Create new Account</ButtonP>
                                </div>
                                <div className="loginText">
                                    I already have an account <strong onClick={navigateToSignIn}>login</strong>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </SignUpStyled>
    )
}

export default SignUp
