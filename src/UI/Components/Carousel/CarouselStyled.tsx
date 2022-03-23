import styled from 'styled-components'

const CarouselStyled = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 4fr 1fr;
    align-items: center;
    overflow: hidden;
    transition: 0.4s;

    & .itemsContainer {
        height: 256px;
        width: 100%;
        display: flex;
        column-gap: 20px;
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
        align-items: center;
        justify-content: flex-end;
        column-gap: 10px;
    }
    & .extra {
        width: 100vw;
        height: 20px;
    }
`
export default CarouselStyled
