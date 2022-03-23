import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import LeftArrowStyled from './LeftArrowStyled'
type Props = {
    onClick?: () => void
    disabled?: boolean
}
const LeftArrowButton: React.FC<Props> = ({ onClick, disabled }) => {
    return (
        <LeftArrowStyled disabled={disabled} onClick={disabled ? () => console.log('disabled') : onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </LeftArrowStyled>
    )
}

export default LeftArrowButton
