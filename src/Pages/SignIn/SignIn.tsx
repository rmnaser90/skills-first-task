import React from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CheckboxStyled from '../../Components/Checkbox/CheckboxStyled'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import Input from '../../Components/Inputs/Input'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Title from '../../Components/Title/Title'
import SignUpHeader from '../../Features/SignUpHeader/SignUpHeader'
import SignUpStyled from '../SignUp/SignUpStyled'

const SignIn: React.FC = () => {
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
                        <Input placeholder="Email Address" />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Password" />
                        <Input placeholder="Password" type="password" />
                    </div>
                </div>
                <div className="forgetPasswordText">
                    <strong>Forgot password</strong>
                </div>
                <div className="actionsContainer">
                    <div className="buttonContainer">
                        <ButtonP>Sign in</ButtonP>
                    </div>
                </div>
            </div>
        </SignUpStyled>
    )
}

export default SignIn
