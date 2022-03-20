import styled from 'styled-components'
import colors from '../../Theme/Colors'

const InputStyled = styled.div`
    width: 100%;
    height: 45px;
    & input {
        width: 100%;
        height:45px;
        padding-left:16px;
        padding-right: 16px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid #d6d6d6;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
export default InputStyled
