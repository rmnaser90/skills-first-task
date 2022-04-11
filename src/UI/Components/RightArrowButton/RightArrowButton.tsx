import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import LeftArrowStyled from '../LeftArrowButton/LeftArrowStyled'

type Props = {
    onClick?: () => void
    disabled?: boolean
}
const RightArrowButton: React.FC<Props> = ({ onClick, disabled }) => {
    return (
        <LeftArrowStyled role={"button"} disabled={disabled} onClick={disabled ? () => console.log('disabled') : onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </LeftArrowStyled>
    )
}

export default RightArrowButton
