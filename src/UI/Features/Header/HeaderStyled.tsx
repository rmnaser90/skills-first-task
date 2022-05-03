import styled from 'styled-components'
import colors from '../../Theme/Colors'

const HeaderStyled = styled.div`
    background-color: ${colors.primary};
    height: 72px;
    width: 86.4vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
`
export default HeaderStyled