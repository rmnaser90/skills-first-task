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
    }
    & .titleContainer {
        width: 90%;
        align-self: flex-end;
    }
    & .descriptionContainer {
        width: 90%;
        font-size: ${({width})=>width?'11px':'18px'};
    }
`
export default CardStyled
