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
        grid-template-columns: 1fr 0.5fr;
    }
    & .imgContainer {
        padding-left: 20px;
        padding-top: 7.5vh;
    }
    & .recomendationSection{
        margin: 50px;
        margin-bottom: 100px;
    }
    & .recommendedTitle{
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
        margin-top: 70px;
    }
    & .inspirationContainer {
        background-color: white;
        width: 93.6%;
        padding-left: 6.4%;
        height: 500px;
        display: grid;
        grid-template-rows: 1.5fr 4fr ;
        align-items: center;
        overflow-y: hidden;
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
        grid-template-rows: 1fr 2fr;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 32px;
        height: 174px;
        line-height: 24px;
    }

    @media only screen and (min-width: 768px) {
        & .mainContainer {
            height: ${({ viewportHeight }) => viewportHeight - 72 + 'px'};
        }
        & .topNav {
            display: none;
        }
        & .headlineContainer {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
        }
        & .leftSection {
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            justify-items: flex-start;
        }
        & .title {
            align-self: flex-end;
            font-size: 80px !important;
        }
        & .subtitle {
            align-self: flex-start;
            margin-top: 20px;
            font-size: 60px !important;
        }
        & .actionContainer {
            align-self: flex-start;
        grid-template-columns: 1fr 1fr;
        min-width: 450px;

        }
        & .imgContainer {
            display: grid;
            align-items: center;
            justify-items: center;
            width: 100%;
            margin: 0px;
            padding: 0px;
        }
        & .inspirationContainer {
            height: 600px;
        }

        & .featuresHeader{
            width: 50%;
        }
        & .featuresContainer{
            display: grid;
            width: 90%;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-items: center;
            column-gap: 20px;
        }
        & .featuresContainer div{
            width: 80%;
        }
    }
`

export default HomePageStyled
