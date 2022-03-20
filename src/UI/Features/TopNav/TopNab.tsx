import React from 'react'
import TopNavStyled from './TopNavStyled'
const TopNab: React.FC = () => {
    return (
        <TopNavStyled>
            <div>Section1</div>
            <div className="dot"/>
            <div>Section2</div>
            <div className="dot"/>
            <div>Section3</div>
        </TopNavStyled>
    )
}

export default TopNab
