import React from 'react'
import '../../Theme/colors.css'
import './ButtonP.css'
import colors from '../../Theme/Colors'

type Props = {
    width?: (string | number) | undefined
    height?: (string | number) | undefined
    onClick: () => void
    type: 'primary' | 'secondary' | 'default'
}

const ButtonP: React.FC<Props> = ({ width, height, onClick, type }) => {
    const divStyle = {
        width: width ? width : '100%',
        height: height ? height : '100%',
        backgroundColor: colors[type],
        color: colors.text[type],
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px',
        cursor: 'pointer',
    }

    return (
        <div onClick={onClick} style={{ ...divStyle }}>
            <h2 style={{ margin: '0px' }}>add new item</h2>
        </div>
    )
}

export default ButtonP
