import React from 'react'
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

const SignIn: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signInForm = useSelector((state: State) => state.forms.login)
    const { email, password } = signInForm
    const inputHandler = function (property: 'email' | 'password', value: string) {
        const action: Action = {
            type: INPUT_HANDLER,
            payload: {
                inputHandler: {
                    form: 'login',
                    property,
                    value
                }
            }
        }
        dispatch(action)
    }

    const submit = function () {
        const action:Action = {type:"login",payload:{}}
    }

    return (
        <SignUpStyled>
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
                <div className="inputsContainer">
                    <div className="inputContainer">
                        <InputLabel text="Email" />
                        <Input
                            placeholder="Email Address"
                            value={email}
                            onChange={({ target }) => inputHandler('email', target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Password" />
                        <Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({ target }) => inputHandler('password', target.value)}
                        />
                    </div>
                </div>
                <div className="forgetPasswordText">
                    <strong>Forgot password</strong>
                </div>
                <div className="actionsContainer">
                    <div className="buttonContainer">
                        <ButtonP>Sign in</ButtonP>
                    </div>
                    <div className="loginText">
                        I don&apos;t have an account <strong onClick={() => navigate('../signup')}>Sign Up</strong>
                    </div>
                </div>
            </div>
        </SignUpStyled>
    )
}

export default SignIn
