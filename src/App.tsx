import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

function App() {
  const fetch = ()=>'hello'

  const title = fetch() as String

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
