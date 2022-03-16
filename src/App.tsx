import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AppStyled from './AppStyled'
import Header from './Features/Header/Header'
import FunctionPage from './Pages/FunctionPage/FunctionPage'
import Homepage from './Pages/HomePage/Homepage'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'

const App: React.FC = function () {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const [items, setItems] = useState(ITEMS)

    useEffect(() => {
        window.onresize = function () {
            setViewportHeight(window.innerHeight)
            console.log('changed')
        }
    }, [])
    return (
        <AppStyled viewportHeight={viewportHeight}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Homepage viewportHeight={viewportHeight} items={items} />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route
                        path="function/"
                        element={<FunctionPage viewportHeight={viewportHeight} items={items} />}
                    />
                </Routes>
            </BrowserRouter>
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
