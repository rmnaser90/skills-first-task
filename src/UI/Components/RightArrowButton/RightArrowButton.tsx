import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import LeftArrowStyled from '../LeftArrowButton/LeftArrowStyled'

const RightArrowButton = () => {
    return (
        <LeftArrowStyled>
            <FontAwesomeIcon icon={faAngleRight} />
        </LeftArrowStyled>
    )
}

export default RightArrowButton
