import React, { useReducer } from "react";
import "./App.css";

import background1 from "../src/assets/background-1.jpg";
import background2 from "../src/assets/background-2.jpg";
import background3 from "../src/assets/background-3.jpg";
import chair1 from "../src/assets/chair.jpg";
import room1 from "../src/assets/room-1.jpg";
import { ReactComponent as LeftArrow } from "../src/assets/icons/icon-previous.svg";
import { ReactComponent as RightArrow } from "../src/assets/icons/icon-next.svg";
import Navbar from "./components/Navbar";
import { REDUCER_ACTION, ReducerImgArrows } from "./hooks/reducer/ReducerImgArrows";

const imgObj = [
  {img: background1},
  {img: background2},
  {img: background3}
];

function App() {

  const [arrowIndex, dispatch] = useReducer(ReducerImgArrows, 0);
  const currentImg = imgObj[arrowIndex];

  return (
    <>
      <div className="grid-parent">
        <Navbar />
        <div className="grid-row-1">
          <div className="grid-row-1-div">
            <img src={currentImg.img} alt="background" />
          </div>
          <div className="grid-row-1-div">
            <div className="grid-row-1-btn">
              <button className="grid-btn-arrow" onClick={(e: any) => dispatch({ type: REDUCER_ACTION.DECREASE })}>
                <LeftArrow />
              </button>
              <button className="grid-btn-arrow" onClick={(e: any) => dispatch({ type: REDUCER_ACTION.INCREASE })}>
                <RightArrow />
              </button>
            </div>
          </div>
          <div className="grid-row-1-div">
            <h1>Discover innovative ways to decorate</h1>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              accusamus exercitationem quia dolores voluptas dolorem molestias
              facilis, minima cum cupiditate impedit odit iste culpa adipisci
              sapiente omnis molestiae voluptatibus maxime?
            </span>
            <button className="grid-row-1-btn-shop">
              shop now <span>&#x27f6;</span>
            </button>
          </div>
        </div>
        <div className="grid-row-2">
          <div className="grid-row-2-div">
          </div>
          <div className="grid-row-2-div">
            <h3>about our furniture</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laborum quia eligendi non quibusdam autem delectus voluptas
              voluptate libero praesentium nobis alias assumenda aut illo, sint
              qui accusamus unde molestias.
            </span>
          </div>
          <div className="grid-row-2-div">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
