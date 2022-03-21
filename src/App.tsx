import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { State, Action, Book } from './Types/Types'

import './App.css'
import AppStyled from './AppStyled'
import Header from './UI/Features/Header/Header'
import FunctionPage from './UI/Pages/FunctionPage/FunctionPage'
import Homepage from './UI/Pages/HomePage/Homepage'
import SignIn from './UI/Pages/SignIn/SignIn'
import SignUp from './UI/Pages/SignUp/SignUp'
import APIManager from './APIs/APIManager'
// import store from './StoreManager/store'

// const dispatch: Action = { type: 'login', payload: { user: { username: 'rami' } } }
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// })
// store.dispatch(dispatch)
// // unsubscribe()
// store.dispatch(dispatch)
const apiManager = new APIManager()

const App: React.FC = function () {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const dispatch = useDispatch()

    const getBooks = async function () {
        const books: Book[] = await apiManager.getBooks()
        const dispatcher: Action = { type: 'getbooks', payload: { books } }
        dispatch(dispatcher)
    }

    useEffect(() => {
        getBooks()
        window.onresize = function () {
            setViewportHeight(window.innerHeight)
        }
    }, [])
    
    return (
        <AppStyled viewportHeight={viewportHeight}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Homepage viewportHeight={viewportHeight} />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="function/" element={<FunctionPage viewportHeight={viewportHeight} />} />
                </Routes>
            </BrowserRouter>
        </AppStyled>
    )
}

export default App
