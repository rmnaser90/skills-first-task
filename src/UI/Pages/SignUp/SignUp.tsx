import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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

const SignUp: React.FC = () => {
    const navigate = useNavigate()
    const { isLoogedIn, forms } = useSelector((state: State) => state)
    const { signUp } = forms
    const { fullName, email, password, confirmPassword } = signUp
    const { signUpInputHandler } = Dispatcher(useDispatch())

    useEffect(() => {
        if (isLoogedIn) {
            navigate('/')
        }
    }, [])

    return (
        <SignUpStyled>
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
                <div className="inputsContainer">
                    <div className="inputContainer">
                        <InputLabel text="Full Name" />
                        <Input
                            value={fullName}
                            placeholder="Full Name"
                            onChange={({ target }) => signUpInputHandler('fullName', target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Email" />
                        <Input
                            value={email}
                            placeholder="Email Address"
                            onChange={({ target }) => signUpInputHandler('email', target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Password" />
                        <Input
                            value={password}
                            placeholder="Password"
                            type="password"
                            onChange={({ target }) => signUpInputHandler('password', target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Confirm password" />
                        <Input
                            value={confirmPassword}
                            placeholder="Confirm password"
                            type="password"
                            onChange={({ target }) => signUpInputHandler('confirmPassword', target.value)}
                        />
                    </div>
                </div>
                <div className="actionsContainer">
                    <div className="agreementContainer">
                        <CheckboxStyled type={'checkbox'} />
                        <InputLabel text="I Confirm that I have read the Terms and Conditions" />
                    </div>
                    <div className="buttonContainer">
                        <ButtonP>Create new Account</ButtonP>
                    </div>
                    <div className="loginText">
                        I already have an account <strong onClick={() => navigate('../signin')}>login</strong>
                    </div>
                </div>
            </div>
        </SignUpStyled>
    )
}

export default SignUp
