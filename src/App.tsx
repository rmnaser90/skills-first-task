import React, { useEffect, useState } from 'react'
import './App.css'
import AppStyled from './AppStyled'
import  Header  from './Features/Header/Header'
import FunctionPage from './Pages/FunctionPage/FunctionPage'
import Homepage from './Pages/HomePage/Homepage'
import SignUp from './Pages/SignUp/SignUp'

const App: React.FC = function () {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const [items, setItems] = useState(ITEMS)
  
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
            {/* <FunctionPage viewportHeight={viewportHeight} items={items}/> */}
            {/* <Homepage viewportHeight={viewportHeight} items={items}/> */}
            <SignUp/>
        </AppStyled>
    )
}

const ITEMS = [
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    },
    {
        title: 'post1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro.'
    }
]

export default App

