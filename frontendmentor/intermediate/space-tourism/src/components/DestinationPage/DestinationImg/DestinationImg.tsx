import React, {useState,useRef,useEffect,useContext,ReactNode} from "react";
import { CurrentDestinationContext } from "../../../context/CurrentDestinationContext";

import moon from "../../../assets/moon.png";
import mars from "../../../assets/mars.png";
import europa from "../../../assets/europa.png";
import titan from "../../../assets/titan.png";

interface CrewImgPropsInterface {
  crewID: number;
}

// export const CrewCarrosselButtons = ({crewID,...props}: CrewImgPropsInterface) => {
export const DestinationImg = ({...props}) => {
  //reduce here?
  const [destinationImg, setDestinationImg] = useState(moon);
  const { destinationData, setDestinationData } = useContext(CurrentDestinationContext);

  useEffect(() => {
      if (destinationData.id === 0) {
          setDestinationImg(moon);
        } else if (destinationData.id === 1) {
            setDestinationImg(mars);
        } else if (destinationData.id === 2) {
            setDestinationImg(europa);
        } else {
            setDestinationImg(titan);
        }
  }, [destinationData]);

  return (
    <div className="destination-img">
      <img alt={`dest-img-${destinationData.id}`} src={destinationImg}></img>
    </div>
  );
};
