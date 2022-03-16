import React from 'react'
import InputLabel from '../../Components/InpuLabel/InputLabel'
import Input from '../../Components/Inputs/Input'
import Paragraph from '../../Components/Paragraph/Paragraph'
import Title from '../../Components/Title/Title'
import SignUpHeader from '../../Features/SignUpHeader/SignUpHeader'
import SignUpStyled from './SignUpStyled'
const SignUp: React.FC = () => {
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
                        <Input placeholder="Password" type='password' />
                    </div>
                    <div className="inputContainer">
                        <InputLabel text="Confirm password" />
                        <Input placeholder="Confirm password" type='password'/>
                    </div>
                </div>
                <div className="actionsContainer">
                    <input type="" />

                </div>
            </div>
        </SignUpStyled>
    )
}

export default SignUp
