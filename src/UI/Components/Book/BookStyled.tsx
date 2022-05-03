import colors from '../../Theme/Colors'
import styled from 'styled-components'

type Props = {
    width?: string
    height?: string
}
const BookStyled = styled.div<Props>`
    min-width: 200px;
    max-width: 300px;
    height: ${({ height }) => (height ? height : '52.22vh')};
    display: grid;
    grid-template-rows: 3fr 1fr;
    margin-left: 6.4%;
    margin-right: 6.4%;
    border-radius: 9px;
    margin-right: 30px;
    justify-content: center;
    & .img {
        height: 100%;
        max-width: 290px;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        transition: 0.4s;
    }

    & img {
        height: 100%;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
        position: relative;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
    & .btn {
        position: absolute;
        right: 18px;
        top: 5px;
        font-size: 180%;
        transition: 0.4s;
        cursor: pointer;
    }

    & .addBtn {
        color: crimson;
    }

    & .removeBtn {
        color: white;
    }

    & .btn:hover {
        font-size: 210%;
    }
    & .contentContainer {
        width: 100%;
        padding-top: 10px;
        text-align: center;
        font-weight: 700;
        color: ${colors.text.secondary};
        display: grid;
        align-items: flex-start;
        justify-items: center;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }

    & .descriptionContainer {
        width: 90%;
        height: 75%;
        font-size: ${({ width }) => (width ? '11px' : '18px')};
        overflow-y: scroll;
    }

    @media only screen and (min-width: 768px) {
        & .img:hover {
            z-index: 999;
            overflow-x: visible;
        }
    }
    @media only screen and (max-width: 767px) {
        & .img {
            width: fit-content;
            max-width: 1020px;
        }
    }
`
export default BookStyled
