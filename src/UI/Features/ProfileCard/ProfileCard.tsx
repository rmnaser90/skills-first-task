import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dispatcher from '../../../StoreManager/dispatcher'
import { State } from '../../../Types/Types'
import Avatar from '../../Components/Avatar/Avatar'
import ProfileCardStyled from './ProfileCardStyled'
const ProfileCard: React.FC = () => {
    const [shouldDisplay, setShouldDisplay] = useState<boolean>(false)
    const { user } = useSelector((state: State) => state)
    const { signOut } = Dispatcher(useDispatch())

    return (
        <ProfileCardStyled onMouseLeave={()=>setShouldDisplay(false)} shouldDisplay={shouldDisplay} >
            <div className="mainContainer">
            <div className="detailsContainer" onClick={() => setShouldDisplay(true)}>
                <Avatar name={user.fullName || ''} diameter={shouldDisplay ? '120px' : '60px'} />
                {shouldDisplay && <h2>{user.fullName}</h2>}
            </div>
            {shouldDisplay && (
                <div className="actionsContainer">
                    <div className="btn">My Account</div>
                    <div className="btn" onClick={signOut}>
                        LogOut
                    </div>
                </div>
            )}
            </div>
        </ProfileCardStyled>
    )
}

export default ProfileCard
