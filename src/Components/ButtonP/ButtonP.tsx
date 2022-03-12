import React, { useState } from 'react'
import '../../Theme/colors.css'
import './ButtonP.css'
import styles from './ButtonPStyle'

type Props = {
    onClick: () => void
}

const ButtonP: React.FC<Props> = ({  onClick }) => {
    const [isHovered, seIsHovered] = useState<boolean>(false)
    const {divStyle } = styles
        divStyle.width = isHovered?'95%':'90%'
    return (
        <div
            onClick={onClick}
            style={{ ...divStyle}}
            onMouseEnter={() => seIsHovered(true)}
            onMouseLeave={() => seIsHovered(false)}
        >
            <h2 style={{ margin: '0px' }}>add new item</h2>
        </div>
    )
}

export default ButtonP
