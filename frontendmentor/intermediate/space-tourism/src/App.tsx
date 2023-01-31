import { useState } from "react";
import "./App.css";
import mainLogo from "./assets/logo.svg";
import * as Styled from "./App.styled";

import { DataProvider } from "../src/context/DataContext";

import { Link, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";
import { Technology } from "./pages/technology";

function App() {
  //reducer or custom hook here to change variable
  const [bgImage, setBGImage] = useState("main");
  return (
    <DataProvider>
      <Styled.AppDiv bgImg={bgImage}>
        <nav className="navbar">
          <img alt="logo" src={mainLogo} />
          <hr />
          <nav className="navbar-links">
            <ul>
              <li>
                <Link to="/" onClick={() => setBGImage("main")}><b>00</b> HOME
                </Link>
              </li>
              <li>
                <Link to="/destination" onClick={() => setBGImage("dest")}><b>01</b> DESTINATION
                </Link>
              </li>
              <li>
                <Link to="/crew" onClick={() => setBGImage("crew")}><b>02</b> CREW
                </Link>
              </li>
              <li>
                <Link to="/tech" onClick={() => setBGImage("tech")}><b>03</b> TECHNOLOGY
                </Link>
              </li>
            </ul>
          </nav>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Technology />} />
        </Routes>
      </Styled.AppDiv>
    </DataProvider>
  );
}

export default App;
