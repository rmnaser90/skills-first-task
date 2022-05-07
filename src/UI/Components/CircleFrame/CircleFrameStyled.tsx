import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    width?: string
    height?: string
}
const CircleFrameStyled = styled.div<Props>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 50%;
    background-color: ${colors.default};
    display: grid;
    align-items: center;
    justify-items: center;
    overflow: hidden;
    & img{
        opacity: 0.6;
    }
`
export default CircleFrameStyled
