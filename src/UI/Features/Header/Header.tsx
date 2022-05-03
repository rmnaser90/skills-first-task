import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderStyled from './HeaderStyled'
import { useSelector } from 'react-redux'
import { State } from '../../../Types/Types'
import ProfileCard from '../ProfileCard/ProfileCard'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    const { isLoogedIn } = useSelector((state: State) => state)

    return (
        <HeaderStyled>
            <div className="logo">
            <Link className='logoText' to={'/'}>

                Netboox
            </Link>
                </div>
            {isLoogedIn ? <ProfileCard /> : <FontAwesomeIcon icon={faBars} className="menuIcon" />}
        </HeaderStyled>
    )
}
export default Header
