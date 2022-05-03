import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Dispatcher from '../../../StoreManager/dispatcher'
import { State } from '../../../Types/Types'
import Avatar from '../../Components/Avatar/Avatar'
import ProfileCardStyled from './ProfileCardStyled'
const ProfileCard: React.FC = () => {
    const [shouldDisplay, setShouldDisplay] = useState<boolean>(false)
    const { user } = useSelector((state: State) => state)
    const { signOut } = Dispatcher(useDispatch())
    const showProfileCard = () => setShouldDisplay(true)
    const hideProfileCard = () => setShouldDisplay(false)

    return (
        <ProfileCardStyled onMouseLeave={hideProfileCard} shouldDisplay={shouldDisplay}>
            <div className="mainContainer">
                <div data-testid="detailsContainer" className="detailsContainer" onClick={showProfileCard}>
                    <Avatar name={user.fullName || ''} diameter={shouldDisplay ? '120px' : '50px'} />
                    {shouldDisplay && <h2>{user.fullName}</h2>}
                </div>
                {shouldDisplay && (
                    <div data-testid="actionsContainer" className="actionsContainer">
                        <div className="btn">My Account</div>
                        <div className="btn" onClick={signOut}>
                           <Link to='/'>
                            LogOut
                           </Link>
                        </div>
                    </div>
                )}
            </div>
        </ProfileCardStyled>
    )
}

export default ProfileCard
