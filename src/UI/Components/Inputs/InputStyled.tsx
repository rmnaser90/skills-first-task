import styled from 'styled-components'

type Props = {
    invalid?: boolean
}
const InputStyled = styled.div<Props>`
    width: 100%;
    height: 45px;
    & input {
        width: 100%;
        height: 45px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: ${({ invalid }) => (invalid ? '2px solid #e63946' : '1px solid #d6d6d6')};
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 4px;
    }

    & .errorMsg{
        color: #e63946;
        font-size: 80%;
        font-weight: 700;
    }
`
export default InputStyled
