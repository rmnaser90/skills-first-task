import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    disabled?: boolean
}
const LeftArrowStyled = styled.div<Props>`
    height: 38px;
    width: 36px;
    padding-right: 2px;
    border-radius: 20px;
    border: 2px solid ${({disabled})=>disabled ? 'grey' : colors.text.secondary};
    color: ${({disabled})=>disabled ? 'grey' : colors.text.secondary};
    font-size: 19px;
    display: grid;
    align-items: center;
    justify-items: center;
    cursor: ${({disabled})=>disabled ? 'auto' : 'pointer'};
`

export default LeftArrowStyled
