import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import LeftArrowStyled from './LeftArrowStyled'

const LeftArrowButton:React.FC = () => {
  return (
    <LeftArrowStyled>
        <FontAwesomeIcon icon={faAngleLeft}/>
    </LeftArrowStyled>
  )
}

export default LeftArrowButton