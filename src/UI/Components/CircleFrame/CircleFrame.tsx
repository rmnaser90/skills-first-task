import React from 'react'
import CircleFrameStyled from './CircleFrameStyled'
type Props = {
    radius?: number
}
const CircleFrame: React.FC<Props> = ({radius}) => {
    return <CircleFrameStyled radius={radius}></CircleFrameStyled>
}

export default CircleFrame
