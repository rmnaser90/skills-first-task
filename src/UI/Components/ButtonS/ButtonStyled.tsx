import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    showIcon?: boolean | undefined
}
const ButtonStyled = styled.div<Props>`
    border: 1px solid ${colors.text.secondary};
    width: 104px;
    display: grid;
    grid-template-columns: ${({ showIcon }) => (showIcon ? '1fr 2fr' : '1fr')};
    align-items: center;
    justify-items: center;
    font-size: 16px;
    height: 36px;
    border-radius: 56px;
    transition: 0.4s;
    & .icon {
        background-color: ${colors.text.secondary};
        justify-self: flex-end;
        width: 17px;
        height: 17px;
        border-radius: 8.5px;
        transition: 0.4s;
    }
`

export default ButtonStyled
