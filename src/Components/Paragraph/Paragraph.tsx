import React, { ReactNode } from 'react'
import ParagraphStyle from './ParagraphStyle'
interface Props {
    children: string | ReactNode
}

const Paragraph: React.FC<Props> = ({ children }) => {
    const { text } = ParagraphStyle
    return <div style={{ ...text }}>{children}</div>
}

export default Paragraph
