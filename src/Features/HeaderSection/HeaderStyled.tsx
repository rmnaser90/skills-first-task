import styled from 'styled-components'
import colors from '../../Theme/Colors'

type Props = {
    isShown?:boolean
}
const HeaderStyled = styled.div<Props>`
    background-color: ${colors.default};
    height: 248px;
    width: 87.2vw;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09);
    padding-left: 6.4vw;
    padding-right: 6.4vw;
    padding-top: 27px;
    padding-bottom: 24px;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;

    & .paraContainer {
        width: 100%;
        height: 100%;
    }
    & .actionContainer{
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
    }
    & .actionContainer div{
        position: relative;
    }
`
export default HeaderStyled
