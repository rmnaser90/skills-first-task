import styled from 'styled-components'
import colors from '../../Theme/Colors'

const HeaderStyled = styled.div`
    background-color: ${colors.secondary};
    height: 72px;
    width: 86.4vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-right: 7.2vw;
    padding-left: 6.4vw;
    position: relative;
    & .menuIcon {
        justify-self: flex-end;
    }
    & .logo {
        width: 76px;
        height: 36px;
        background-color: ${colors.primary};
        display: grid;
        align-items: center;
        justify-items: center;
    }
`
export default HeaderStyled