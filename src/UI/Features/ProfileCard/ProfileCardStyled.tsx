import styled from 'styled-components'
import colors from '../../Theme/Colors'

const ProfileCardStyled = styled.div<{ shouldDisplay: boolean }>`
    width: 10px;
    height: 100%;
    position: relative;
    align-self: ${({ shouldDisplay }) => (shouldDisplay ? 'flex-start' : 'center')};
    justify-self: flex-end;
    transition: 0.4s;
    & .mainContainer {
        width: ${({ shouldDisplay }) => (shouldDisplay ? '30vw' : 'auto')};
        height: ${({ shouldDisplay }) => (shouldDisplay ? '40vh' : '100%')};
        background-color: ${({ shouldDisplay }) => shouldDisplay && 'white'};
        position: absolute;
        display: grid;
        grid-template-rows: ${({ shouldDisplay }) => (shouldDisplay ? '2fr 0.1fr 1fr' : '1fr')};
        align-items: center;
        justify-items: center;
        top: ${({ shouldDisplay }) => shouldDisplay? '20px':0};
        right: 0;
        border:${({ shouldDisplay }) => (shouldDisplay ? ` 1px solid ${colors.text.secondary}` : '0px solid')};
        border-radius: 5px;
        cursor: ${({ shouldDisplay }) => (shouldDisplay ? 'default' : 'pointer')};
    }
    & .mainContainer hr {
        width: 90%;
        color: ${colors.text.secondary};
        background-color:${colors.text.secondary} ;
    }
    & .detailsContainer {
        color: ${colors.text.secondary};
        display: grid;
        align-items: center;
        justify-items: center;
        justify-content: center;
        height: 100%;
    }

    & .actionsContainer {
        width: 100%;
        height: 100%;
        font-weight: 700;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
    }
    & .btn {
        color: ${colors.text.secondary};
        cursor: pointer;
    }
    & .btn a {
        text-decoration: none;
        color: ${colors.text.secondary};
    }

    @media only screen and (max-width: 767px) {
        & .mainContainer {
            top: ${({ shouldDisplay }) => (shouldDisplay ? '10' : '0')};
            right:-10px;
            width: ${({ shouldDisplay }) => (shouldDisplay ? '90vw' : 'auto')};
            height: ${({ shouldDisplay }) => (shouldDisplay ? '50vh' : '100%')};
        }
    }
`

export default ProfileCardStyled
