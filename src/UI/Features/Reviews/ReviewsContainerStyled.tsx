import styled from 'styled-components'
import colors from '../../Theme/Colors'

const ReviewsContainerStyled = styled.div`
    width: 100%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    padding-bottom: 100px;
    & hr {
        width: 90vw;
    }
    & .inputsContainer {
        width: 80%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        justify-items: center;
    }
    & .inputsContainer .messageInput {
        display: block;
        font-family: Roboto;
        margin-top: 20px;
        padding: 10px;
        width: 90%;
        align-items: flex-start;
        min-height: 100px;
        height: fit-content;
    }
    & .btn {
        width: 84%;
        min-width: 220px;
        align-self: flex-end;
        justify-self: center;
        display: grid;
        align-items: flex-start;
        justify-items: center;
    }
    & .reviews {
        color: ${colors.text.secondary};
        width: 90vw;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        row-gap: 20px;
        margin-top: 50px;
    }
    & .reviewContainer {
        width: 90%;
        max-width: 100vw;
        padding: 2%;
        padding-top: 5px;
        padding-bottom: 20px;
        border: 1px solid grey;
        border-radius: 10px;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
        position: relative;
    }
    & .reviewerContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        column-gap: 10px;

    }
    & .reviewContainer .text {
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
        width: 90%;
        padding-left: 60px;
        max-width: 90vw;
    }
    & .deleteBtn {
        position: absolute;
        display: block;
        top: 15px;
        right: 20px;
        cursor: pointer;
        font-size: 20px;
        color: grey;
        z-index: 9999;
        transition: 0.3s;
     
    }
    & .deleteBtn:hover{
        font-size: 22px;

    }
`
export default ReviewsContainerStyled
