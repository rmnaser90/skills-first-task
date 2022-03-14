import React from 'react'
import './App.css'
import ButtonP from './Components/ButtonP/ButtonP'
import ButtonS from './Components/ButtonS/ButtonS'
import Card from './Components/Card/Card'
import SubTitle from './Components/SubTitle/SubTitle'
import Title from './Components/Title/Title'
import { Header } from './Features/Header/Header'
import HeaderSection from './Features/HeaderSection/HeaderSection'

const item = {
    title:"post1",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro."
}
const App: React.FC = function () {
    return (
        <div className="app">
            <Header/>
            <HeaderSection/>
            <Title>All Results</Title>
            <SubTitle>Sort by</SubTitle>
            <ButtonS showIcon={true}>Filter</ButtonS>
            <Card item={item}/>
        </div>
    )
}

export default App
