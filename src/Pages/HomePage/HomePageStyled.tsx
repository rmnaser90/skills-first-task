import styled from 'styled-components'

const HomePageStyled = styled.div`
    overflow-y: scroll;
    height: ${window.innerHeight - 72 + 'px'};
    & .resultsContainer {
    margin-left: 6.4vw;
    margin-top: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr 2fr;
    align-items: center;
    }
    & .actionsContainer {
        display: flexbox;
        flex-direction: row;
        column-gap: 10px;
        overflow-x: scroll;
    }
`

export default HomePageStyled
