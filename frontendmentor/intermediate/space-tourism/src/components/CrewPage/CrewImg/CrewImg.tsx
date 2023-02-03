import React, {useState,useRef,useEffect,useContext,ReactNode} from "react";
import { CurrentCrewProvider } from "../../../context/CurrentCrewContext";

import { CurrentCrewContext } from '../../../context/CurrentCrewContext';

import crew0 from "../../../assets/crew-0.png";
import crew1 from "../../../assets/crew-1.png";
import crew2 from "../../../assets/crew-2.png";
import crew3 from "../../../assets/crew-3.png";

interface CrewImgPropsInterface {
  crewID: number;
}

// export const CrewCarrosselButtons = ({crewID,...props}: CrewImgPropsInterface) => {
export const CrewImg = ({...props}) => {
  //reduce here?
  const [crewImg, setCrewImg] = useState(crew0);
  const { crewData, setCrewData } = useContext(CurrentCrewContext); 

  useEffect(() => {
      if (crewData.id === 0) {
          setCrewImg(crew0);
        } else if (crewData.id === 1) {
            setCrewImg(crew1);
        } else if (crewData.id === 2) {
            setCrewImg(crew2);
        } else {
            setCrewImg(crew3);
        }
  }, [crewData]);

  return (
    <div className="crew-img">
      <img alt={`crew-img-${crewData.id}`} src={crewImg}></img>
    </div>
  );
};
