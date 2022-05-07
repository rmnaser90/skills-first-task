import React from 'react'
import CircleFrameStyled from './CircleFrameStyled'
type Props = {
    width?: string
    height?: string
    img?:string
}
const CircleFrame: React.FC<Props> = ({ width = '256px', height = '256px',img }) => {
    return <CircleFrameStyled role="grid" width={width} height={height}>
        {img && <img width={'90%'} src={img}/>}
    </CircleFrameStyled>
}
export default CircleFrame
