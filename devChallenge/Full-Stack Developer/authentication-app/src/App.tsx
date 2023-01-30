import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './pages/Login';
import { Navbar } from './pages/Navbar';
import { NewUser } from './pages/NewUser';
import { NotFound } from './pages/NotFound';
import { PersonalChangeInfo } from './pages/PersonalChangeInfo';
import { PersonalInfo } from './pages/PersonalInfo';

function App() {

const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {loggedIn &&
       <Navbar />
      }
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<NewUser />}/>
        <Route path='/personalinfo' element={<PersonalInfo />}/>
        <Route path='/personalinfo/:id' element={<PersonalChangeInfo />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
