import React from 'react'
import './App.css'
import ButtonP from './Components/ButtonP/ButtonP'
import { Header } from './Features/Header/Header'
import HeaderSection from './Features/HeaderSection/HeaderSection'

const App: React.FC = function () {
    return (
        <div className="app">
            <Header/>
            <HeaderSection/>
        </div>
    )
}

export default App
