import React from 'react'
import TitleStyle from './TitleStyle'
interface Props {
    children: string
}

const Title: React.FC<Props> = ({ children }) => {
    const { text } = TitleStyle
    return <div style={{...text}}>{children}</div>
}

export default Title
