import styled from 'styled-components'
type Props = {
    viewportHeight: number
}
const HomePageStyled = styled.div<Props>`
    width: 100%;
    height: ${({ viewportHeight }) => viewportHeight - 72 + 'px'};
    & .headlineContainer {
        width: 87.2%;
        margin-left: 6.4%;
        margin-right: 6.4%;
    }
    & .actionContainer {
        width: 100%;
        margin-top: 32px;
        display: grid;
        grid-template-columns: 1fr 1.01fr;

    }
`

export default HomePageStyled
