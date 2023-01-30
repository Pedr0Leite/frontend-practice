import {useState} from 'react';
import './App.css';
import mainLogo from "./assets/logo.svg";

import {Link, Route, Routes} from "react-router-dom";
import { Main } from "./pages/main";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";
import { Technology } from "./pages/technology";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img alt="logo" src={mainLogo}/>
        <hr/>
          <nav className="navbar-links">
          <ul>
          <li><Link to="/"><b>00</b> HOME</Link></li>
          <li><Link to="/destination"><b>01</b> DESTINATION</Link></li>
          <li><Link to="/crew"><b>02</b> CREW</Link></li>
          <li><Link to="/tech"><b>03</b> TECHNOLOGY</Link></li>
          </ul>
          </nav>
      </nav>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/tech" element={<Technology/>} />
      </Routes>
    </div>
  );
}

export default App;
