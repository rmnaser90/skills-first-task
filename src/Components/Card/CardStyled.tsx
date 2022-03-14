import colors from '../../Theme/Colors'
import styled from 'styled-components'


const CardStyled = styled.div`
    width: 87.2%;
    height: 52.22vh;
    margin-top: 18px;
    margin-bottom: 16px;
    display: grid;
    grid-template-rows: 1.09fr 1fr;
    padding-left: 6.4%;
    padding-right: 6.4%;
    border-radius: 9px;
    box-shadow: 0px 6.74227px 12.3608px rgba(0, 0, 0, 0.09);

    & .img{
        width: 100%;
        height: 100%;
        background-color: ${colors.default};
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
    & .contentContainer{
        width: 100%;
        height: 100%;
        background-color: ${colors.secondary};
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }



`
export default CardStyled