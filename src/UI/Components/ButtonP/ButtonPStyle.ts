import React from 'react'
import colors from '../../Theme/Colors'

const styles = {
    divStyle: {
        width: '90%',
        height: '49px',
        backgroundColor: colors.primary,
        color: colors.text.primary,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px',
        cursor: 'pointer',
        transition:'0.3s',
        fontFamily:'Roboto',
        fontSize:'20px',
        fontWeight:'400'
        
    } as React.CSSProperties
    
}

export default styles
