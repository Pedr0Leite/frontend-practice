import {useState,useEffect,useContext} from "react";
import { CurrentCrewContext } from '../../../context/CurrentCrewContext';

import * as Styled from './CrewImg.styled';

import crew0 from "../../../assets/crew-0.png";
import crew1 from "../../../assets/crew-1.png";
import crew2 from "../../../assets/crew-2.png";
import crew3 from "../../../assets/crew-3.png";

interface CrewImgPropsInterface extends HTMLDivElement {
}

// export const CrewImg = ({...props}: CrewImgPropsInterface) => {
export const CrewImg = ({...props}) => {
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
//     <Styled.CrewImgDiv>
// <Styled.CrewImg alt={`crew-img-${crewData.id}`} src={crewImg}></Styled.CrewImg>
//     </Styled.CrewImgDiv>
    <div className="crew-img">
      <img alt={`crew-img-${crewData.id}`} src={crewImg}></img>
    </div>
  );
};
