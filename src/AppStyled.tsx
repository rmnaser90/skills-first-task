import styled from 'styled-components'
type Props = {
    viewportHeight: number
}
const AppStyled = styled.div<Props>`
    width: 100vw;
    height: ${({ viewportHeight }) => viewportHeight};
`

export default AppStyled
