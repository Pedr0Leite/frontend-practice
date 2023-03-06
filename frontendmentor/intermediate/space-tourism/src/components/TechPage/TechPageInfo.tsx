import React, {useState,useRef,useEffect,useContext,ReactNode,HTMLAttributes} from "react";
import { CurrentdTechContext } from '../../context/CurrentTechContext';


// interface CrewPageInfoPropsInterface extends HTMLAttributes<HTMLDivElement> {
//   role: string;
//   name: string;
//   details: string;
// }

// export const CrewPageInfo = ({role,name,details,...props}: CrewPageInfoPropsInterface) => {
export const TechPageInfo = ({...props}) => {
    const { techData, setTechData } = useContext(CurrentdTechContext); 
    
    return (
    <>
      <div className="tech-subtitle">
        <span>03</span> SPACE LAUNCH 101
        </div>
        <div className="tech-sub-subtitle">
        THE TERMINOLOGY…
        </div>
        <div className="tech-title">
        {techData.name}
        </div>
        <div className="tech-text">
        {techData.details}
      </div>
    </>
  );
};
