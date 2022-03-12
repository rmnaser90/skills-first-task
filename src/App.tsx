import React from 'react'
import './App.css'
import ButtonP from './Components/ButtonP/ButtonP'

const App: React.FC = function () {
    return (
        <div className="App">
            <ButtonP  type='primary' height='50px' width="200px" onClick={() => 'hello'} />
        </div>
    )
}

export default App
