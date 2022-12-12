import './App.css';
import Navbar from './components/Navbar';
import InputDiv from './components/InputDiv';
import React, { useState } from "react";

function App() {

  const [currentState, setCurrentState] = useState('');

  const handleClick = (value) => {
    setCurrentState(value)
  }

  return (
    <div className="App">
     <Navbar handleClick={handleClick}></Navbar>
     <InputDiv currentState={currentState}></InputDiv>
    </div>
  );
}

export default App;