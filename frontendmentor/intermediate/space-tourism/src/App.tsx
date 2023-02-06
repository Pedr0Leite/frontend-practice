import { useEffect, useReducer, useState } from "react";
import "./App.css";
import mainLogo from "./assets/logo.svg";
import * as Styled from "./App.styled";

import { DataProvider } from "../src/context/DataContext";
import { reducerBG } from '../src/hooks/reducer/ReducerAction';

import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Main } from "./pages/main";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";
import { Technology } from "./pages/technology";
import { REDUCER_MAIN_BG } from "./models/reducer.model";

function App() {
  const location = useLocation();
  const [bgImage, setBGImage] = useState("main");
  const [bgPathName, bgPathNameDispatch] = useReducer(reducerBG, "");
  // let { params } = useParams();
  
  useEffect(() => {
    const locationPathName = location.pathname.replace('\/', '');
    switch(locationPathName){
      case "":
        bgPathNameDispatch({type: REDUCER_MAIN_BG.HOME_BG});
      break;
      case "destination":
        bgPathNameDispatch({type: REDUCER_MAIN_BG.DESTINATION_BG});
      break;
      case "crew":
        bgPathNameDispatch({type: REDUCER_MAIN_BG.CREW_BG});
      break;
      case "tech":
        bgPathNameDispatch({type: REDUCER_MAIN_BG.TECH_BG});
      break;
    }
    
  }, [location])


  return (
    <DataProvider>
      <Styled.AppDiv bgImg={bgPathName}>
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
          <Route path="/" index element={<Main />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Technology />} />
        </Routes>
      </Styled.AppDiv>
    </DataProvider>
  );
}

export default App;
