import styled from 'styled-components'

const CarouselStyled = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 6fr 1fr;
    align-items: center;
    transition: 0.4s;
    position: relative;

    & .itemsContainer {
        height: 400px;
        width: 100%;
        display: flex;
        column-gap: 10px;
        flex-direction: row;
        overflow-x: hidden;
        position: relative;
        transition: 0.4s;
    }

    & .navbtns {
        width: 93.6%;
        padding-right: 6.4%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;
        column-gap: 10px;
    }
    & .extra {
        width: 100vw;
        height: 20px;
    }
    @media only screen and (max-width: 768px) {
        grid-template-rows: 1fr;
        & .itemsContainer {
            overflow-x: scroll;
        }
        & .extra {
            width: 24px;
            height: 20px;
        }
    }
`
export default CarouselStyled
