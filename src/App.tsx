import React, { useEffect, useState } from 'react'
import './App.css'
import AppStyled from './AppStyled'
import  Header  from './Features/Header/Header'
import FunctionPage from './Pages/FunctionPage/FunctionPage'
import Homepage from './Pages/HomePage/Homepage'

const App: React.FC = function () {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = function () {
            if (window.innerHeight != viewportHeight) {
                setViewportHeight(window.innerHeight)
                console.log('changed')
            }
        }
    }, [])
    return (
        <AppStyled viewportHeight={viewportHeight}>
            <Header />
            {/* <FunctionPage viewportHeight={viewportHeight} /> */}
            <Homepage viewportHeight={viewportHeight}/>
        </AppStyled>
    )
}

export default App
