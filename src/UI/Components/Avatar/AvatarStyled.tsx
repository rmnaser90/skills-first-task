import styled from "styled-components";
import colors from "../../Theme/Colors";
const AvatarStyled = styled.p<{diameter:string}>`
    width: ${({diameter='50px'})=>diameter};
    height:${({diameter='50px'})=>diameter};;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 25px;
    font-weight: 600;
    margin: 0px;
    background-color: ${colors.default};
    color: ${colors.primary};
    transition: 0.4s;

`
export default AvatarStyled