import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderStyled from './HeaderStyled'
import { useDispatch } from 'react-redux'
import Dispatcher from '../../../StoreManager/dispatcher'
const Header: React.FC = () => {
    const {signOut}= Dispatcher(useDispatch())
    return (
        <HeaderStyled>
            <div className='logo'>Netboox</div>
            <div className='menuIcon' onClick={signOut}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </HeaderStyled>
    )
}
export default Header
