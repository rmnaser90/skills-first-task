import colors from '../../Theme/Colors'
import styled from 'styled-components'

type Props = {
    width?: string
    height?: string
}
const CardStyled = styled.div<Props>`
    width: ${({ width }) => (width ? width : '87.2%')};
    height: ${({ height }) => (height ? height : '52.22vh')};

    display: grid;
    grid-template-rows: 1.09fr 1fr;
    margin-left: 6.4%;
    margin-right: 6.4%;
    border-radius: 9px;
    box-shadow: 0px 6.74227px 12.3608px rgba(0, 0, 0, 0.09);
    & .img {
        width: 100%;
        height: 100%;
        background-color: ${colors.default};
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        display: grid;
        align-items: center;
        justify-items: center;
        position: relative;
    }
    & img{
        height: ${({width})=>width?'110px':'190px'};
    }
    & .addBtn{
        position: absolute;
        right: 20px;
        font-size: 150%;
        transition: 0.4s;
        cursor: pointer;
    }
    & .addBtn:hover{
     
        font-size: 200%;
    }
    & .contentContainer {
        width: 100%;
        height: 100%;
        background-color: ${colors.secondary};
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
        display: grid;
        grid-template-rows: 1fr 2.5fr;
        align-items: center;
        justify-items: center;
        overflow: hidden;
    }
    & .titleContainer {
        width: 90%;
        align-self: flex-end;
        display: grid;
        align-items: center;
        overflow: hidden;
        height: 40px;

    }
    & .descriptionContainer {
        width: 90%;
        height: 75%;
        font-size: ${({width})=>width?'11px':'18px'};
        overflow-y: scroll;
    }
`
export default CardStyled
