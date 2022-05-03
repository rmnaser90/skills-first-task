import React, { ReactChild, ReactNode, useState } from 'react'
import '../../Theme/colors.css'
import styles from './ButtonPStyle'

type Props = {
    onClick?: () => void
    children?: string | ReactChild | ReactNode
}

const ButtonP: React.FC<Props> = ({ onClick, children }) => {
    const [isHovered, seIsHovered] = useState<boolean>(false)
    const { divStyle } = styles
    divStyle.width = isHovered ? '95%' : '90%'
    return (
        <div
            role="button"
            onClick={onClick}
            style={{ ...divStyle }}
            onMouseEnter={() => seIsHovered(true)}
            onMouseLeave={() => seIsHovered(false)}
        >
            {children}
        </div>
    )
}

export default ButtonP
