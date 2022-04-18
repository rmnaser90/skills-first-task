import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import LeftArrowStyled from './LeftArrowStyled'
type Props = {
    onClick?: () => void
    disabled?: boolean
}
const LeftArrowButton: React.FC<Props> = ({ onClick, disabled }) => {
 
    const handleClick = disabled? ()=>({}):onClick
    return (
        <LeftArrowStyled role={'button'} data-testid="leftArrowBtn" disabled={disabled} onClick={handleClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </LeftArrowStyled>
    )
}

export default LeftArrowButton
