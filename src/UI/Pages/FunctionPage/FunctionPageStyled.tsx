import styled from 'styled-components'

type Props = {
    viewportHeight: number
}
const HomePageStyled = styled.div<Props>`
    overflow-y: scroll;
    height: ${({ viewportHeight }) => viewportHeight - 72 + 'px'};
    & .resultsContainer {
        margin-left: 6.4vw;
        margin-top: 20px;
        display: grid;
        grid-template-rows: repeat(4,1fr);
        align-items: center;
    }
    & .inputContainer{
        margin-right: 6.4vw;
        margin-top: 10px;
        margin-bottom:10px ;
    }
    & .inputContainer input{
        text-align: center;
    }

    & .actionsContainer {
        display: flexbox;
        flex-direction: row;
        column-gap: 10px;
        overflow-x: scroll;
    }

    & .cardsContainer {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    @media only screen and (min-width: 768px) {
        & .cardsContainer {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            row-gap: 40px;
            padding-left: 5%;
            padding-right: 5%;
            padding-top: 40px;
        }
        & .cardContainer {
            width: 286px;
            height: 400px;
            background-color: red;
            margin: 0px;
        }
    }
`

export default HomePageStyled
