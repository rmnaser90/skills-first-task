import styled from 'styled-components'
import colors from '../../Theme/Colors'

const HeaderStyled = styled.div`
    background-color: ${colors.primary};
    height: 72px;
    width: 86.4vw;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding-right: 7.2vw;
    padding-left: 6.4vw;
    position: relative;
    box-shadow: 0px 0px 9px 2px rgba(0,0,0,0.35);
    z-index: 99;
    & .menuIcon {
        justify-self: flex-end;
    }
    & .logo {
        width: 80px;
        height: 40px;
        border-radius: 5px;
        font-size: large;
        background-color: ${colors.secondary};
        color: ${colors.text.secondary};
        font-weight: 700;
        display: grid;
        align-items: center;
        justify-items: center;
        cursor: pointer;
    }
    & .logoText{
        text-decoration: none;
        color: ${colors.text.secondary};

    }
    & .actionsContainer{
        justify-self: flex-end;
    }
    & .actionsContainer a{
       cursor: pointer;
       text-decoration: none;
       color: ${colors.text.secondary};
       transition: 0.4s;
    }
    & .actionsContainer a:hover{
       font-size: 105%;
    }

    @media only screen and (max-width: 767px) {
        & .actionsContainer{
            font-size: 90%;
            position: relative;
            right: -15px;
        }
        & .actionsContainer a:hover{
       font-size: 100%;
    }
    }
`
export default HeaderStyled