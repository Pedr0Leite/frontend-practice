import styled from 'styled-components';

import homeBG from "./assets/home-background.jpg";
import destinationBG from "./assets/destination-background.jpg";
import crewBG from "./assets/crew-background.png";
import techBG from "./assets/tech-background.jpg";

interface AppDivProp {
    bgImg: string;
}

export const AppDiv = styled.div<AppDivProp>`
  background-image: url('${props => {
    
    if(props.bgImg === 'main'){
      return homeBG;
  }else if(props.bgImg === 'dest'){
      return destinationBG;
  }else if(props.bgImg === 'crew'){
        return crewBG;
  }else if(props.bgImg === 'tech'){
        return techBG;
    }else{
        return homeBG;
    }
  }}');
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
`