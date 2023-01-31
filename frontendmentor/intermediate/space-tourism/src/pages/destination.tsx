import React from 'react';

import moonImg from "./../assets/moon.png"

export const Destination = () => {
    return(
        <div className="destination-main-div">
            <div className="destination-img"><img alt="moon" src={moonImg}></img></div>
        <div className="destination-subtitle">
          <span>01</span> PICK YOUR DESTINATION
        </div>
      <div className="destination-area-btn">
        <button className="destination-planet-btn">MOON</button>
        <button className="destination-planet-btn">MARS</button>
        <button className="destination-planet-btn">EUROPA</button>
        <button className="destination-planet-btn">TITAN</button>
      </div>
        <div className="destination-title">
          MOON
        </div>
        <div className="destination-info">
        See our planet as you’ve never seen it before. 
        A perfect relaxing trip away to help regain perspective and come back refreshed. 
        While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </div>
        <div className="destination-sub-info">
            <div className="destination-sub-info-left">
            <h4>AVG. DISTANCE</h4>
            384,400 KM
            </div>
            <div className="destination-sub-info-right">
            <h4>EST. TRAVEL TIME</h4>
            3 DAYS
            </div>
        </div>
        </div>
    )
}