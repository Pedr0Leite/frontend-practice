import React, {useState,useRef,useEffect,useContext,ReactNode, useReducer} from "react";
import { CurrentDestinationContext } from "../../../context/CurrentDestinationContext";
import { reducerPlanet } from "../../../hooks/reducer/ReducerAction";
import { REDUCER_PLANETS } from "../../../models/reducer.model";

interface CrewImgPropsInterface {
  crewID: number;
}

// export const CrewCarrosselButtons = ({crewID,...props}: CrewImgPropsInterface) => {
export const DestinationImg = ({...props}) => {

  const { destinationData, setDestinationData } = useContext(CurrentDestinationContext);
  const [planetImg, planetImgDispatch] = useReducer(reducerPlanet, "");
  
  
  useEffect(() => {

      switch(destinationData.name){
        case "":
          planetImgDispatch({type: REDUCER_PLANETS.MOON});
        break;
        case "moon":
          planetImgDispatch({type: REDUCER_PLANETS.MOON});
        break;
        case "mars":
          planetImgDispatch({type: REDUCER_PLANETS.MARS});
        break;
        case "europa":
          planetImgDispatch({type: REDUCER_PLANETS.EUROPA});
        break;
        case "titan":
          planetImgDispatch({type: REDUCER_PLANETS.TITAN});
        break;
      }

  }, [destinationData]);

  return (
    <div className="destination-img">
      <img alt={`planet-${destinationData.id}`} src={planetImg}></img>
    </div>
  );
};
