import styled from 'styled-components'
import colors from '../../Theme/Colors'
const SignUpStyled = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 999;
    & .loadingLayer {
        position: fixed;
        z-index: 999;
        background-color: ${colors.default};
        opacity: 0.5;
        width: 100vw;
        height: 100vh;
    }

    & .contactUsForm {
        width: 87.2%;
        padding-left: 6.4%;
        padding-right: 6.4%;
        height: 500px;
        position: relative;
        top: -26px;
        background-color: white;
        border-radius: 10px 10px 0px 0px;
    }

    & .formHeader {
        width: 100%;
        height: 230px;
        display: grid;
        align-items: center;
    }
    & .inputsContainer {
        display: flex;
        flex-direction: column;
        row-gap: 18px;
    }
    & .inputContainer {
        height: 91px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        align-items: center;
    }
    & .actionsContainer {
        width: 100%;
        height: 258px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    & .agreementContainer {
        display: flex;
        flex-direction: row;
        column-gap: 5px;
    }
    & .loginText {
        text-align: center;
    }
    & .loginText strong {
        cursor: pointer;
    }
    & .buttonContainer {
        width: 242px;
        display: grid;
        align-items: center;
        justify-items: center;
        align-self: center;
    }
    & .forgetPasswordText {
        margin-top: 20px;
    }
    & .messageInput {
        width: 100%;
        height: 130px;
        font-family: Roboto;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 16px;
        border: 1px solid #d6d6d6;
        box-sizing: border-box;
        border-radius: 4px;
    }

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        & .signUpForm {
            width: 54vw;
            height: 90vh;
            top: 0px;
            border-radius: 0px;
            display: grid;
            padding-top: 10vh;
        }
        & .actionsContainer {
            align-items: flex-start;
        }
        & .buttonContainer {
            align-self: flex-start;
        }
    }
`
export default SignUpStyled
