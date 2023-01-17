import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='' />
      </Routes>
    </div>
  );
}

export default App;
