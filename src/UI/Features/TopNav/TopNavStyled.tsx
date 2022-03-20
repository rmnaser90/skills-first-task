import styled from "styled-components";
import colors from "../../Theme/Colors";


const TopNavStyled = styled.div`
width: 100%;
height: 48px;
display: flex;
flex-direction: row;
align-items: center;
color: ${colors.text.secondary};
justify-content: space-around;
& .dot{
    width: 4px;
    height: 4px;
    background-color: ${colors.secondary};
    border-radius: 2px;

}
`

export default TopNavStyled