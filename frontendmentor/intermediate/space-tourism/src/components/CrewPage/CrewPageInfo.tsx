import React, {useState,useRef,useEffect,useContext,ReactNode,HTMLAttributes} from "react";
import { CurrentCrewContext } from '../../context/CurrentCrewContext';


// interface CrewPageInfoPropsInterface extends HTMLAttributes<HTMLDivElement> {
//   role: string;
//   name: string;
//   details: string;
// }

// export const CrewPageInfo = ({role,name,details,...props}: CrewPageInfoPropsInterface) => {
export const CrewPageInfo = ({...props}) => {
    const { crewData, setCrewData } = useContext(CurrentCrewContext); 
    return (
    <>
      <div className="crew-subtitle">
        <span>02</span> MEET YOUR CREW
      </div>
      <div className="crew-role">{crewData.role}</div>
      <div className="crew-name">{crewData.name}</div>
      <div className="crew-sub-info">{crewData.details}</div>
    </>
  );
};
