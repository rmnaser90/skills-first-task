import React from 'react'
import CircleFrameStyled from './CircleFrameStyled'
type Props = {
    radius: number
}
const CircleFrame: React.FC<Props> = ({radius=256}) => {
    return <CircleFrameStyled radius={radius}></CircleFrameStyled>
}

export default CircleFrame
