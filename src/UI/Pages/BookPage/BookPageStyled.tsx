import styled from 'styled-components'
import colors from '../../Theme/Colors'
type Props = {
    viewportHeight: number
}
const BookPageStyled = styled.div<Props>`
    width: 100%;
    display: grid;
    align-items: flex-start;
    justify-items: center;
    & .header {
        width: 90%;
        height: 80vh;
        min-height: 60vh;
        padding-top: 3%;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        align-items: center;
        justify-items: center;
    }
    & .detailsContainer {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1.5fr 6fr;
        align-items: flex-start;
        align-self: flex-start;
        overflow-y: scroll;

    }
    & .subtitle {
        font-size: 22px;
        font-style: normal;
        width: 60%;
        font-weight: 500;
        margin-top: 5px;
        color: ${colors.text.secondary};
    }
    & .infoContainer{
        align-self: center;
    }
    & .details {
        width: 90%;
        margin-top: 10px;
        color: ${colors.text.secondary};
        font-size: 100%;
    }
    & .details span {
        font-size: 105%;
        font-weight: 700;
    }
    & .description {
        text-align: justify;
    }
    & .btnContainer {
        width: 60%;
        min-width: 220px;
        justify-self: center;
        align-self: flex-end;
        display: grid;
        row-gap: 20px;
        justify-items: center;
    }
    & .link {
        text-decoration: none;
        color: white;
    }
    & .imgContainer {
        width: 100%;
        height: 100%;
        max-height: 800px;
        display: grid;
        align-items: flex-start;
        justify-items: center;
        align-self: flex-start;
    }
    & .imgContainer img {
        width: 100%;
        max-width: 400px;
        align-self: flex-start;
    }
`

export default BookPageStyled
