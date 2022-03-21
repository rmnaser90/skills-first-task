import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    radius?: number
}
const CircleFrameStyled = styled.div<Props>`
    width: ${({ radius }) => radius + 'px' || '256px'};
    height: ${({ radius }) => radius + 'px' || '260px'};
    border-radius: ${({ radius }) => radius? radius / 2 + 'px' : '130px'};
    background-color: ${colors.default};
    display: grid;
    align-items: center;
    justify-items: center;
`
export default CircleFrameStyled
