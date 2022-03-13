import React from 'react'
import HeaderStyle from './HeaderStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC = () => {
    const { headerContainer, menuIcon, logo } = HeaderStyle
    return (
        <div style={{ ...headerContainer }}>
            <div style={{ ...logo }}>Teams</div>
            <div style={{ ...menuIcon }}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}
