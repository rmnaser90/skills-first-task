import React, { ReactNode } from 'react'
import TitleStyle from './TitleStyle'
interface Props {
    children: string | undefined | ReactNode
    fontSize?: string
    className?: string
}

const Title: React.FC<Props> = ({ children, fontSize, className }) => {
    const { text: defaultStyle } = TitleStyle
    const text = fontSize ? { ...defaultStyle, fontSize } : defaultStyle
    return (
        <div className={className || ''} style={{ ...text }}>
            {children}
        </div>
    )
}

export default Title
