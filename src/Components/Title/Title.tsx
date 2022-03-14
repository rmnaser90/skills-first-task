import React, { ReactNode } from 'react'
import TitleStyle from './TitleStyle'
interface Props {
    children: string | undefined |ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
    const { text } = TitleStyle
    return <div style={{...text}}>{children}</div>
}

export default Title
