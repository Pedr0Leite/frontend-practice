import React, { useContext, useEffect } from 'react';
import {CurrentDestinationContext, CurrentDestinationProvider } from "../../context/CurrentDestinationContext";
import moonImg from "./../assets/moon.png"
import { DestinationPlanetButton } from "../../components/DestinationPage/DestinationPlanetButton";
import { DestinationImg } from './DestinationImg/DestinationImg';

export const DestinationMaindiv = () => {
  
  const { destinationData, setDestinationData } = useContext(CurrentDestinationContext);

    return(
        <div className="destination-main-div">
            {/* <div className="destination-img"><img alt={destinationData.name} src={destinationData.img}></img></div> */}
            <DestinationImg></DestinationImg>
        <div className="destination-subtitle">
          <span>01</span> PICK YOUR DESTINATION
        </div>
      <div className="destination-area-btn">
        <DestinationPlanetButton/>
      </div>
        <div className="destination-title">
          {destinationData.name.toLocaleUpperCase()}
        </div>
        <div className="destination-info">
        {destinationData.details}
        </div>
        <div className="destination-sub-info">
            <div className="destination-sub-info-left">
            <h4>AVG. DISTANCE</h4>
            {destinationData.avg_distance}
            </div>
            <div className="destination-sub-info-right">
            <h4>EST. TRAVEL TIME</h4>
            {destinationData.est_travel_time}
            </div>
        </div>
        </div>
    )
}