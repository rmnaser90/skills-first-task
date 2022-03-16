import React from 'react'
import ButtonP from '../../Components/ButtonP/ButtonP'
import CheckboxStyled from '../../Components/Checkbox/CheckboxStyled'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import Input from '../../Components/Inputs/Input'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Title from '../../Components/Title/Title'
import SignUpHeader from '../../Features/SignUpHeader/SignUpHeader'
import SignUpStyled from './SignUpStyled'
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
    const navigate = useNavigate()
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
                        <Input placeholder="Full Name" />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Email" />
                        <Input placeholder="Email Address" />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Password" />
                        <Input placeholder="Password" type="password" />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Confirm password" />
                        <Input placeholder="Confirm password" type="password" />
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
                        I already have an account <strong onClick={()=>navigate('../signin')}>login</strong>
                    </div>
                </div>
            </div>
        </SignUpStyled>
    )
}

export default SignUp
