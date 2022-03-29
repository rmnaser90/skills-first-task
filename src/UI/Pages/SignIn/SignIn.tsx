import React, { useEffect } from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import Input from '../../Components/Inputs/Input'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Title from '../../Components/Title/Title'
import SignUpHeader from '../../Features/SignUpHeader/SignUpHeader'
import SignUpStyled from '../SignUp/SignUpStyled'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Action, State } from '../../../Types/Types'
import { INPUT_HANDLER } from '../../../StoreManager/actions'
import Dispatcher from '../../../StoreManager/dispatcher'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const SignIn: React.FC = () => {
    const navigate = useNavigate()
    const { loginInputHandler, login } = Dispatcher(useDispatch())
    const signInForm = useSelector((state: State) => state.forms.login)
    const isLoggedIn = useSelector((state: State) => state.isLoogedIn)
    const validate = Yup.object({
        email: Yup.string().email('Enter a valid email')
    })

    const submit = async function (values = signInForm) {
        const res = await login(values)
        if (!res.err) {
            loginInputHandler('email', '')
            loginInputHandler('password', '')
            navigate('/')
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])

    return (
        <SignUpStyled onKeyPress={(e) => e.key === 'Enter' && submit()}>
            <SignUpHeader />
            <div className="signUpForm">
                <div className="formHeader">
                    <Title>Login</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est veritatis, laboriosam
                        ut sapiente nemo adipisci. Ut dolor nulla quisquam corrupti. Similique omnis aspernatur,
                        repudiandae inventore rem harum officiis. Aut!
                    </Paragraph>
                </div>
                <Formik initialValues={signInForm} onSubmit={(values) => submit(values)} validationSchema={validate}>
                    {({ handleSubmit, values, handleChange }) => (
                        <Form>
                            <div className="inputsContainer">
                                <div className="inputContainer">
                                    <InputLabel text="Email" />
                                    <Input
                                        placeholder="Email Address"
                                        value={values.email}
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <InputLabel text="Password" />
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="forgetPasswordText">
                                <strong>Forgot password</strong>
                            </div>
                            <div className="actionsContainer">
                                <div className="buttonContainer">
                                    <ButtonP onClick={handleSubmit}>Sign in</ButtonP>
                                </div>
                                <div className="loginText">
                                    I don&apos;t have an account{' '}
                                    <strong onClick={() => navigate('../signup')}>Sign Up</strong>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </SignUpStyled>
    )
}

export default SignIn
