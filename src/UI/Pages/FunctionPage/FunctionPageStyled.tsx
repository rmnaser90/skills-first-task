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
        grid-template-rows: repeat(4, 1fr);
        align-items: center;
    }
    & .inputContainer {
        margin-right: 6.4vw;
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
    }
    & .inputContainer input {
        text-align: center;
    }
    & .searchIcon{
        position: absolute;
        height: 50%;
        color: grey;
        opacity: 0.8;
        right: 10px;
        top: 9px;
        cursor: pointer;
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
        align-items: center;
        justify-content: center;
        justify-items: center;
        row-gap: 20px;
    }
    & .cardContainer {
        max-width: 300px;
        overflow-x: hidden;
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }
    & .noResults{
        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        font-size: 150%;
        color: grey;
        margin-bottom: 50px;
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
            margin: 0px;
            display: grid;
            align-items: center;
            justify-content: center;
            justify-items: center;
            overflow-x: hidden;
        }
    }
`

export default HomePageStyled
