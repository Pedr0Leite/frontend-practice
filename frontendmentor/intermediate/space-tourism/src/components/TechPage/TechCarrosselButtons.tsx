import React, {useState, useRef, useEffect, useContext, ReactNode } from 'react';
import useSetTechActiveButton from '../../hooks/useSetTechActiveButton';

interface TechPageInfoPropsInterface {
    role: string;
    name: string;
    details:string;
  }

// export const TechCarrosselButtons = ({role, name, details,...props} : TechPageInfoPropsInterface) => {
export const TechCarrosselButtons = ({...props}) => {
    const {selectedBtn, onBtnClick} = useSetTechActiveButton();

    return(
        <div className="tech-btn-div">
        <button id="tech-btn-0" onClick={() => onBtnClick(0)} className='tech-btn tech-active-btn'>1</button>
        <button id="tech-btn-1" onClick={() => onBtnClick(1)} className='tech-btn'>2</button>
        <button id="tech-btn-2" onClick={() => onBtnClick(2)} className='tech-btn'>3</button>
      </div>
    )
}