import colors from '../../Theme/Colors'
import React from 'react'
const HeaderStyle = {
    headerContainer: {
        backgroundColor: colors.secondary,
        height: '72px',
        width: '86.4vw',
        display: 'grid',
        gridTemplateColumns: '1fr1fr 1fr',
        alignItems: 'center',
        paddingRight: '7.2vw',
        paddingLeft: '6.4vw',
        
    } as React.CSSProperties,
    menuIcon: {
        justifySelf: 'flex-end',
    },
    logo:{
        width:'76px',
        height:'36px',
        backgroundColor:colors.primary,
        display:'grid',
        alignItems:'center',
        justifyItems:'center'
    }
}

export default HeaderStyle
