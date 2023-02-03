import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import {CurrentDestinationContext, CurrentDestinationProvider } from "../context/CurrentDestinationContext";
import moonImg from "./../assets/moon.png"
import { DestinationPlanetButton } from "../components/DestinationPage/DestinationPlanetButton";
import { DestinationMaindiv } from '../components/DestinationPage/DestinationMaindiv';

export const Destination = () => {
  
  const { data, setData } = useContext(DataContext);
  const { destinationData, setDestinationData } = useContext(CurrentDestinationContext);
  
  useEffect(() => {
    console.log('destinationData :', destinationData);
    
  }, [destinationData])

    return(
      <CurrentDestinationProvider>
        {/* <div className="destination-main-div">
            <div className="destination-img"><img alt="moon" src={destinationData.img}></img></div>
        <div className="destination-subtitle">
          <span>01</span> PICK YOUR DESTINATION
        </div>
      <div className="destination-area-btn">
        <DestinationPlanetButton/>
      </div>
        <div className="destination-title">
          {destinationData.name}
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
        </div> */}
        <DestinationMaindiv></DestinationMaindiv>
      </CurrentDestinationProvider>
    )
}