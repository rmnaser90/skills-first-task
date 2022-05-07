import React from 'react'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import SignUpHeaderStyled from './SignUpHeaderStyled'
import bookImg from '../../../assets/openBook.png'
const SignUpHeader: React.FC = () => {
    return (
        <SignUpHeaderStyled>
            <CircleFrame
            img={bookImg}
                width={window.innerWidth >= 768 ? '381px' : '187px'}
                height={window.innerWidth >= 768 ? '381px' : '187px'}
            />
            <div className="circle" />
            <div className="hollowCircle" />
        </SignUpHeaderStyled>
    )
}

export default SignUpHeader
