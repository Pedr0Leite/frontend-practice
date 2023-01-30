import React from 'react';
import './App.css';
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img alt="logo" src={logo}/>
        <hr/>
          <div className="navbar-links">
          <a><b>00</b> HOME</a>
          <a><b>01</b> DESTINATION</a>
          <a><b>02</b> CREW</a>
          <a><b>03</b> TECHNOLOGY</a>
          </div>
      </nav>
      <div className="main-area-home-div">
    <div className="main-area-info">
      {/* <h3>SO, YOU WANT TO TRAVEL TO</h3>
      <h1>SPACE</h1>
      <span>Let’s face it; if you want to go to space,
        you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
        and relax because we’ll give you a truly out of this world experience!</span> */}
    </div>
    <div className="main-area-btn">
      {/* <button>Explore</button> */}
    </div>
      </div>
    </div>
  );
}

export default App;
