import React from 'react'
import './App.css'
import ButtonP from './Components/ButtonP/ButtonP'
import ButtonS from './Components/ButtonS/ButtonS'
import SubTitle from './Components/SubTitle/SubTitle'
import Title from './Components/Title/Title'
import { Header } from './Features/Header/Header'
import HeaderSection from './Features/HeaderSection/HeaderSection'

const App: React.FC = function () {
    return (
        <div className="app">
            <Header/>
            <HeaderSection/>
            <Title>All Results</Title>
            <SubTitle>Sort by</SubTitle>
            <ButtonS showIcon={true}>Filter</ButtonS>
        </div>
    )
}

export default App
