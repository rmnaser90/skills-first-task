import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderStyled from './HeaderStyled'
import { useDispatch, useSelector } from 'react-redux'
import Dispatcher from '../../../StoreManager/dispatcher'
import { State } from '../../../Types/Types'
import Avatar from '../../Components/Avatar/Avatar'
import ProfileCard from '../ProfileCard/ProfileCard'

const Header: React.FC = () => {
    const { signOut } = Dispatcher(useDispatch())
    const { isLoogedIn, user } = useSelector((state: State) => state)

    return (
        <HeaderStyled>
            <div className="logo">Netboox</div>
           {isLoogedIn ? <ProfileCard /> : <FontAwesomeIcon icon={faBars} className='menuIcon' />}
        </HeaderStyled>
    )
}
export default Header
