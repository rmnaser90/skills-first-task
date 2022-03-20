import React from 'react'
import CircleFrame from '../../Components/CircleFrame/CircleFrame'
import SignUpHeaderStyled from './SignUpHeaderStyled'
const SignUpHeader:React.FC = () => {
  return (
    <SignUpHeaderStyled>
        
        <CircleFrame/>
        <div className="circle"/>
        <div className="hollowCircle"/>
        
    </SignUpHeaderStyled>
  )
}

export default SignUpHeader