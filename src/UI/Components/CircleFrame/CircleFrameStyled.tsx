import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    radius?: number
}
const CircleFrameStyled = styled.div<Props>`
    width: ${({ radius }) => radius + 'px'};
    height: ${({ radius }) => radius + 'px'};
    border-radius: 50%;
    background-color: ${colors.default};
    display: grid;
    align-items: center;
    justify-items: center;
`
export default CircleFrameStyled
