import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AppStyled from './AppStyled'
import Header from './UI/Features/Header/Header'
import FunctionPage from './UI/Pages/FunctionPage/FunctionPage'
import Homepage from './UI/Pages/HomePage/Homepage'
import SignIn from './UI/Pages/SignIn/SignIn'
import SignUp from './UI/Pages/SignUp/SignUp'
import APIManager from './APIs/APIManager'
import store from './StoreManager/store'
import { Action } from './Types/Types'

const dispatch: Action = { type: 'login', payload: { user: { username: 'rami' } } }
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(dispatch)
// unsubscribe()
store.dispatch(dispatch)


const apiManager = new APIManager()
const App: React.FC = function () {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const [items, setItems] = useState([])

    const getBooks = async function () {
        const books = await apiManager.getBooks()
        console.log(books)
        setItems(books)
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
                    <Route index element={<Homepage viewportHeight={viewportHeight} items={items} />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="function/" element={<FunctionPage viewportHeight={viewportHeight} items={items} />} />
                </Routes>
            </BrowserRouter>
        </AppStyled>
    )
}

export default App
