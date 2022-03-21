import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderStyled from './HeaderStyled'
const Header: React.FC = () => {
    // const { headerContainer, menuIcon, logo } = HeaderStyle
    return (
        <HeaderStyled>
            <div className='logo'>Netboox</div>
            <div className='menuIcon'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </HeaderStyled>
    )
}
export default Header
