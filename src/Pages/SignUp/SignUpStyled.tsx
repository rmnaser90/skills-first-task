import styled from 'styled-components'
import colors from '../../Theme/Colors'

const SignUpStyled = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    & .signUpForm {
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
    & .loginText{
        text-align: center;
    }
    & .loginText strong{
        cursor: pointer;
    }
    & .buttonContainer{
        width: 222px;
        display: grid;
        align-items: center;
        justify-items: center;
        align-self: center;
    }
    & .forgetPasswordText{
        margin-top: 20px;
    }
`
export default SignUpStyled
