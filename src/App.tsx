import React from 'react'
import './App.css'
import ButtonS from './Components/ButtonS/ButtonS'
import Card from './Components/Card/Card'
import SubTitle from './Components/SubTitle/SubTitle'
import Title from './Components/Title/Title'
import { Header } from './Features/Header/Header'
import HeaderSection from './Features/HeaderSection/HeaderSection'
import Homepage from './Pages/HomePage/Homepage'

const item = {
    title:"post1",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex itaque quasi voluptatibus molestias non eos, nulla reiciendis eligendi! Ab cupiditate rem commodi aspernatur pariatur expedita, harum quo doloribus porro."
}
const App: React.FC = function () {
    return (<div>
        <Header />
        <Homepage/>
    </div>
    )
}

export default App
