import React, {useState, useRef, useEffect, useContext, ReactNode } from 'react';
import useSetCrewActiveButton from '../../hooks/useSetCrewActiveButton';

interface CrewPageInfoPropsInterface {
    role: string;
    name: string;
    details:string;
  }

// export const CrewCarrosselButtons = ({role, name, details,...props} : CrewPageInfoPropsInterface) => {
export const CrewCarrosselButtons = ({...props}) => {
    const {selectedBtn, onBtnClick} = useSetCrewActiveButton();

    return(
    <div className="crew-main-btn">
        <button id="btn-0" onClick={() => onBtnClick(0)} className="crew-btn active-btn"></button>
        <button id="btn-1" onClick={() => onBtnClick(1)} className="crew-btn"></button>
        <button id="btn-2" onClick={() => onBtnClick(2)} className="crew-btn"></button>
        <button id="btn-3" onClick={() => onBtnClick(3)} className="crew-btn"></button>
    </div>
    )
}