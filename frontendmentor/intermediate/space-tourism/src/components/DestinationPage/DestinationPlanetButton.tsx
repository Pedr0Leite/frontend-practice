import React, {useState, useRef, useEffect, useContext, ReactNode, HTMLAttributes } from 'react';
import useSetDestinationActiveButton from '../../hooks/useSetDestinationActiveButton';

interface DestinationPlanetButtonPropsInterface extends HTMLAttributes<HTMLButtonElement> {
    id: string;
    innerText: string;
  }

//   export const DestinationPlanetButton = ({id,innerText,...props} : DestinationPlanetButtonPropsInterface) => {
  export const DestinationPlanetButton = () => {
      const {selectedBtn, onBtnClick} = useSetDestinationActiveButton();
      
      return(
        // <div className="crew-main-btn">
            <>
            <button id="destination-btn-0" onClick={() => onBtnClick(0)} className="destination-planet-btn destination-active-btn">MOON</button>
            <button id="destination-btn-1" onClick={() => onBtnClick(1)} className="destination-planet-btn">MARS</button>
            <button id="destination-btn-2" onClick={() => onBtnClick(2)} className="destination-planet-btn">EUROPA</button>
            <button id="destination-btn-3" onClick={() => onBtnClick(3)} className="destination-planet-btn">TITAN</button>
            </>
        // </div>
    // <><button id={`destination-btn-${id}`} onClick={() => onBtnClick(Number(id))} className="destination-planet-btn">{innerText}</button></>
    )
}