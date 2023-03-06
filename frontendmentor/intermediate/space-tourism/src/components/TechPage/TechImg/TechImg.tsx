import {useState,useEffect, useContext} from "react";
import { CurrentdTechContext } from "../../../context/CurrentTechContext";

import tech0 from '../../../assets/tech-0.jpg';
import tech1 from '../../../assets/tech-1.jpg';
import tech2 from '../../../assets/tech-2.jpg';

interface CrewImgPropsInterface {
  crewID: number;
}

// export const CrewCarrosselButtons = ({crewID,...props}: CrewImgPropsInterface) => {
export const TechImg = ({...props}) => {
  //reduce here?
  const [techImg, setTechImg] = useState(tech0);
  const { techData, setTechData } = useContext(CurrentdTechContext);

  useEffect(() => {
      if (techData.id === 0) {
          setTechImg(tech0);
        } else if (techData.id === 1) {
            setTechImg(tech1);
        } else {
            setTechImg(tech2);
        } 
  }, [techData]);

  return (
    <div className="tech-img-div">
      <img alt={`tech-img-${techData.id}`} src={techImg}></img>
    </div>
  );
};
