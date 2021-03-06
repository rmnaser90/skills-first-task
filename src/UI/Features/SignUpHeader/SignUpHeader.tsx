import React from 'react'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import SignUpHeaderStyled from './SignUpHeaderStyled'
const SignUpHeader: React.FC = () => {
    return (
        <SignUpHeaderStyled>
            <CircleFrame
                width={window.innerWidth >= 768 ? '381px' : '187px'}
                height={window.innerWidth >= 768 ? '381px' : '187px'}
            />
            <div className="circle" />
            <div className="hollowCircle" />
        </SignUpHeaderStyled>
    )
}

export default SignUpHeader
