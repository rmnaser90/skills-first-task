import styled from "styled-components";


const CardSkeletonStyled = styled.div`
    height: 400px;
    width: 250px;
    display: grid;
    grid-template-rows: 4fr 1fr;
    

    & .bookSkeleton{
        margin-left: 5%;
        border-radius: 10px;
        width: 90%;
        height: 95%;
    }

    & .titleSkeleton{
        margin-left: 5%;
        width: 90%;
    }
    & .second{
        
        width: 60%;
    }

`

export default CardSkeletonStyled