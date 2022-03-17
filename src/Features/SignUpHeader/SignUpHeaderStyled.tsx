import styled from 'styled-components'
import colors from '../../Theme/Colors'

const SignUpHeaderStyled = styled.div`
    width: 100%;
    height: 377px;
    background-color: ${colors.secondary};
    display: grid;
    align-items: center;
    justify-items: center;
    & .hollowCircle {
        position: absolute;
        width: 95.82px;
        height: 95.82px;
        left: 45%;
        top: 245px;
        border: 1.91632px solid #000000;
        border-radius: 47.41px;
        box-sizing: border-box;
    }
    & .circle {
        position: absolute;
        width: 54.14px;
        height: 54.14px;
        border-radius: 27.7px;
        left: 65%;
        top: 235px;
        background: ${colors.primary};
    }
`

export default SignUpHeaderStyled
