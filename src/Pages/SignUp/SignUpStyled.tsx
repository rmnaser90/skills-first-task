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
`
export default SignUpStyled
