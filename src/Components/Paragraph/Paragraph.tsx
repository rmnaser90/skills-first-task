import React from 'react'
import ParagraphStyle from './ParagraphStyle'
interface Props {
    children: string
}

const Paragraph: React.FC<Props> = ({ children }) => {
    const { text } = ParagraphStyle
    return <div style={{ ...text }}>{children}</div>
}

export default Paragraph
