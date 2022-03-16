import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    viewportHeight: number
}
const HomePageStyled = styled.div<Props>`
    width: 100%;
    height: ${({ viewportHeight }) => viewportHeight - 72 + 'px'};
    & .mainContainer {
        height: ${({ viewportHeight }) => viewportHeight - 72 - 48 + 'px'};
        overflow-y: scroll;
    }
    & .headlineContainer {
        width: 87.2%;
        height: 100%;
        margin-left: 6.4%;
        margin-right: 6.4%;
    }
    & .actionContainer {
        width: 100%;
        margin-top: 32px;
        display: grid;
        grid-template-columns: 1fr 1.01fr;
    }
    & .imgContainer {
        padding-left: 20px;
        padding-top: 7.5vh;
    }
    & .inspirationContainer {
        background-color: ${colors.primary};
        width: 93.6%;
        padding-left: 6.4%;
        height: 451px;
        display: grid;
        grid-template-rows: 2fr 4fr 1fr;
        align-items: center;
    }
    & .itemsContainer {
        height: 256px;
        width: 100%;
        display: flexbox;
        flex-direction: row;
        overflow-x: scroll;
    }
    & .navbtns {
        width: 93.6%;
        padding-right: 6.4%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        column-gap: 10px;
    }
    & .featuresContainer {
        width: 87.2%;
        margin-left: 6.4%;
        display: flex;
        flex-direction: column;
        row-gap: 22px;
    }
    & .featuresHeader {
        display: grid;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 32px;
        height: 174px;
        line-height: 24px;
    }
`

export default HomePageStyled
