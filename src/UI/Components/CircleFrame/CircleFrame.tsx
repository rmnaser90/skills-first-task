import React from 'react'
import CircleFrameStyled from './CircleFrameStyled'
type Props = {
    width?: string
    height?: string
}
const CircleFrame: React.FC<Props> = ({ width = '256px', height = '256px' }) => {
    return <CircleFrameStyled width={width} height={height}></CircleFrameStyled>
}
export default CircleFrame
