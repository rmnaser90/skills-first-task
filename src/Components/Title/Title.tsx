import React, { ReactNode } from 'react'
import TitleStyle from './TitleStyle'
interface Props {
    children: string | undefined | ReactNode
    fontSize?: string
}

const Title: React.FC<Props> = ({ children, fontSize }) => {
    const { text:defaultStyle } = TitleStyle
    const text = fontSize?{...defaultStyle,fontSize}:defaultStyle
    return <div style={{ ...text }}>{children}</div>
}

export default Title
