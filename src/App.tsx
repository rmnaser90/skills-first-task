import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './App.css'
import AppStyled from './AppStyled'
import Header from './UI/Features/Header/Header'
import FunctionPage from './UI/Pages/FunctionPage/FunctionPage'
import Homepage from './UI/Pages/HomePage/Homepage'
import SignIn from './UI/Pages/SignIn/SignIn'
import SignUp from './UI/Pages/SignUp/SignUp'
import Dispatcher from './StoreManager/dispatcher'
import ContactUs from './UI/Pages/ContactUs/ContactUs'
import BookPage from './UI/Pages/BookPage/BookPage'

const App: React.FC = function () {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    const { getBooks, autoLogin } = Dispatcher(useDispatch())

    useEffect(() => {
        getBooks()
        autoLogin()
        window.onresize = function () {
            setViewportHeight(window.innerHeight)
            setViewportWidth(window.innerWidth)
        }
    }, [])

    return (
        <AppStyled viewportHeight={viewportHeight}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Homepage viewportWidth={viewportWidth} viewportHeight={viewportHeight} />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="book" element={<BookPage viewportWidth={viewportWidth} viewportHeight={viewportHeight}  />} />
                    <Route path="function/" element={<FunctionPage viewportHeight={viewportHeight} />} />
                </Routes>
            </BrowserRouter>
        </AppStyled>
    )
}

export default App
