import { HTMLAttributes, ReactNode, useState, useReducer, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import * as Styled from './RightSideMainDiv.styled';
import { reducerWeatherIcon } from '../../hooks/ReducerWeatherIcon';

// Assets
// import ThunderIcon from '../../assets/Thunderstorm.png';
// import ShowerIcon from '../../assets/Shower.png';
// import ClearIcon from '../../assets/Clear.png';
// import HailIcon from '../../assets/Hail.png';
// import HeavyCloudIcon from '../../assets/HeavyCloud.png';
// import HeavyRainIcon from '../../assets/HeavyRain.png';
// import LightCloudIcon from '../../assets/LightCloud.png';
// import LightRainIcon from '../../assets/LightRain.png';
// import SleetIcon from '../../assets/Sleet.png';
// import SnowIcon from '../../assets/Snow.png';

import Ndirection from '../../assets/wind-direction/n.png'
import NNEdirection from '../../assets/wind-direction/nne.png'
import NNWdirection from '../../assets/wind-direction/nnw.png'
import Sdirection from '../../assets/wind-direction/s.png'
import SEdirection from '../../assets/wind-direction/se.png'
import SWdirection from '../../assets/wind-direction/sw.png'
import Edirection from '../../assets/wind-direction/e.png'
import ENEdirection from '../../assets/wind-direction/ene.png'
import ESEdirection from '../../assets/wind-direction/ese.png'
import Wdirection from '../../assets/wind-direction/w.png'
import WNWdirection from '../../assets/wind-direction/wnw.png'
import WSWdirection from '../../assets/wind-direction/wsw.png'

const ACTIONS_DEGREES = {
    C: 'C',
    F: 'F'
  }

  const ACTIONS_ICON = {
    SHOWER:'Shower',
    CLEAR:'Clear',
    HAIL:'Hail',
    HEAVYCLOUD:'HeavyCloud',
    HEAVYRAIN:'HeavyRain',
    LIGHTCLOUD:'LightCloud',
    LIGHTRAIN:'LightRain',
    SLTEET:'Sleet',
    SNOW:'Snow',
    THUNDERSTORM:'Thunderstorm'
}


const ACTIONS_WIND = {
  N:'n',
  NNE:'nne',
  NNW:'nnw',
  S:'s',
  SE:'se',
  SW:'sw',
  W:'w',
  WNW:'wnw',
  WSW:'wsw',
  E:'e',
  ENE:'ene',
  ESE:'ese'
}

  
  function reducerDegrees(typeOfDegrees:any, action:any) {
    switch (action.type) {
      case ACTIONS_DEGREES.C:
        typeOfDegrees = ACTIONS_DEGREES.C;
        break;
        case ACTIONS_DEGREES.F:
          typeOfDegrees = ACTIONS_DEGREES.F;
          break;
      default:
        typeOfDegrees = "C";
        break;
    }
  
    return typeOfDegrees;
  }


// function getIcon(iconString:string){
//   let icon = '';
  
//   switch (iconString[0]) {
//     case ACTIONS_ICON.SHOWER:
//       icon = ShowerIcon;
//       break;
//     case ACTIONS_ICON.CLEAR:
//       icon = ClearIcon;
//       break;
//     case ACTIONS_ICON.HAIL:
//       icon = HailIcon;
//       break;
//     case ACTIONS_ICON.HEAVYCLOUD:
//       icon = HeavyCloudIcon;
//       break;
//     case ACTIONS_ICON.HEAVYRAIN:
//       icon = HeavyRainIcon;
//       break;
//     case ACTIONS_ICON.LIGHTCLOUD:
//       icon =LightCloudIcon;
//       break;
//     case ACTIONS_ICON.LIGHTRAIN:
//       icon = LightRainIcon;
//       break;
//     case ACTIONS_ICON.SLTEET:
//       icon = SleetIcon;
//       break;
//     case ACTIONS_ICON.SNOW:
//       icon = SnowIcon;
//       break;
//     case ACTIONS_ICON.THUNDERSTORM:
//       icon = ThunderIcon;
//       break;
//   }
//   return icon;
// }

// function reducerWeatherIcon1(icon:string, action:any) {
//    icon = getIcon(action.type);
//    return icon;
// }
// function reducerWeatherIcon2(icon:string, action:any) {
//    icon = getIcon(action.type);
//    return icon;
// }
// function reducerWeatherIcon3(icon:string, action:any) {
//    icon = getIcon(action.type);
//    return icon;
// }
// function reducerWeatherIcon4(icon:string, action:any) {
//    icon = getIcon(action.type);
//    return icon;
// }
// function reducerWeatherIcon5(icon:string, action:any) {
//    icon = getIcon(action.type);
//    return icon;
// }


function reducerWind(windDirection:any, action:any) {

  switch (action.type) {
case ACTIONS_WIND.N:
  windDirection = Ndirection;
break;
case ACTIONS_WIND.NNE:
  windDirection = NNEdirection;
break;
case ACTIONS_WIND.NNW:
  windDirection = NNWdirection;
break;
case ACTIONS_WIND.S:
  windDirection = Sdirection;
break;
case ACTIONS_WIND.SE:
  windDirection = SEdirection;
break;
case ACTIONS_WIND.SW:
  windDirection = SWdirection;
break;
case ACTIONS_WIND.W:
  windDirection = Wdirection;
break;
case ACTIONS_WIND.WNW:
  windDirection = WNWdirection;
break;
case ACTIONS_WIND.WSW:
  windDirection = WSWdirection;
break;
case ACTIONS_WIND.E:
  windDirection = Edirection;
break;
case ACTIONS_WIND.ENE:
  windDirection = ENEdirection;
break;
case ACTIONS_WIND.ESE:
  windDirection = ESEdirection;
break;
}
return windDirection;
}

interface RightSideDivProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    city:String;
    currentDay:any;
    nextDays:any;
  }
    
  export function RightSideMainDiv({children, city, currentDay, nextDays,...props }: RightSideDivProps) {
    const [typeOfDegrees, dispatchDegrees] = useReducer(reducerDegrees, 'C');
    const [icon1, dispatchIcon1Name] = useReducer(reducerWeatherIcon, '');
    const [icon2, dispatchIcon2Name] = useReducer(reducerWeatherIcon, '');
    const [icon3, dispatchIcon3Name] = useReducer(reducerWeatherIcon, '');
    const [icon4, dispatchIcon4Name] = useReducer(reducerWeatherIcon, '');
    const [icon5, dispatchIcon5Name] = useReducer(reducerWeatherIcon, '');
    const [windDir, dispatchWind] = useReducer(reducerWind, '');
    
    useEffect(() => { 
      dispatchIcon1Name({type: nextDays[0].weather_state});
      dispatchIcon2Name({type: nextDays[1].weather_state});
      dispatchIcon3Name({type: nextDays[2].weather_state});
      dispatchIcon4Name({type: nextDays[3].weather_state});
      dispatchIcon5Name({type: nextDays[4].weather_state});
      dispatchWind({type: currentDay.wind_direction[0]})
    }, [city])
  
    const days = {
        2: new Date(new Date().setDate(new Date().getDate()+1)).toDateString(),
        3: new Date(new Date().setDate(new Date().getDate()+2)).toDateString(),
        4: new Date(new Date().setDate(new Date().getDate()+3)).toDateString(),
        5: new Date(new Date().setDate(new Date().getDate()+4)).toDateString()
    }

    return (<Styled.RightSideMainDiv>
                <div className="rightside-degrees">
          <button onClick={() => dispatchDegrees({type: ACTIONS_DEGREES.C})} className="rightside-degrees-c">ºC</button>
          <button onClick={() => dispatchDegrees({type: ACTIONS_DEGREES.F})} className="rightside-degrees-f">ºF</button>
        </div>
        <div className="rightside-weather-days">
          <div className="rightside-weather-days-card-1">
            <h1 className="rightside-weather-days-card-title-1">Tomorrow</h1>
            <Styled.RightsideWeatherDaysCardIcon1 iconName={icon1}></Styled.RightsideWeatherDaysCardIcon1>
            <div className="rightside-weather-days-card-temp">
              <div className="rightside-weather-days-card-temp-max-1">{typeOfDegrees === 'C' ? currentDay.weather_temp_c[0] + "ºC" : currentDay.weather_temp_f[0] + "ºF"}</div>
              <div className="rightside-weather-days-card-temp-min-1">{typeOfDegrees === 'C' ? currentDay.weather_temp_c[1] + "ºC" : currentDay.weather_temp_f[1] + "ºF"}</div>
            </div>
          </div>
          <div className="rightside-weather-days-card-2">
            <h1 className="rightside-weather-days-card-title-2">{days[2].replace('2023', '')}</h1>
            <Styled.RightsideWeatherDaysCardIcon2 iconName={icon2}></Styled.RightsideWeatherDaysCardIcon2>
            <div className="rightside-weather-days-card-temp">
              <div className="rightside-weather-days-card-temp-max-2">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[0] + "ºC" : nextDays["0"].weather_temp_f[0] + "ºF"}</div>
              <div className="rightside-weather-days-card-temp-min-2">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[1] + "ºC" : nextDays["0"].weather_temp_f[1] + "ºF"}</div>
            </div>
            </div>
          <div className="rightside-weather-days-card-3">
            <h1 className="rightside-weather-days-card-title-3">{days[3].replace('2023', '')}</h1>
            <Styled.RightsideWeatherDaysCardIcon3 iconName={icon3}></Styled.RightsideWeatherDaysCardIcon3>
            <div className="rightside-weather-days-card-temp">
              <div className="rightside-weather-days-card-temp-max-3">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[0] + "ºC" : nextDays["0"].weather_temp_f[0] + "ºF"}</div>
              <div className="rightside-weather-days-card-temp-min-3">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[1] + "ºC" : nextDays["0"].weather_temp_f[1] + "ºF"}</div>
            </div>
            </div>
          <div className="rightside-weather-days-card-4">
            <h1 className="rightside-weather-days-card-title-4">{days[4].replace('2023', '')}</h1>
            <Styled.RightsideWeatherDaysCardIcon4 iconName={icon4}></Styled.RightsideWeatherDaysCardIcon4>
            <div className="rightside-weather-days-card-temp">
              <div className="rightside-weather-days-card-temp-max-4">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[0] + "ºC" : nextDays["0"].weather_temp_f[0] + "ºF"}</div>
              <div className="rightside-weather-days-card-temp-min-4">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[1] + "ºC" : nextDays["0"].weather_temp_f[1] + "ºF"}</div>
            </div>
            </div>
          <div className="rightside-weather-days-card-5">
            <h1 className="rightside-weather-days-card-title-5">{days[5].replace('2023', '')}</h1>
            <Styled.RightsideWeatherDaysCardIcon5 iconName={icon5}></Styled.RightsideWeatherDaysCardIcon5>
            <div className="rightside-weather-days-card-temp">
              <div className="rightside-weather-days-card-temp-max-5">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[0] + "ºC" : nextDays["0"].weather_temp_f[0] + "ºF"}</div>
              <div className="rightside-weather-days-card-temp-min-5">{typeOfDegrees === 'C' ? nextDays["0"].weather_temp_c[1] + "ºC" : nextDays["0"].weather_temp_f[1] + "ºF"}</div>
            </div>
            </div>
        </div>
        <div className="rightside-weather-card-info">
        <div className="rightside-highlight-title">Today's Hightlights</div>
          <div className="weather-card-wind">
            <h4 className="weather-card-title">Wind status</h4>
            <div className="weather-card-info">{currentDay.wind}<span>mph</span></div>
            <Styled.WeatherCardWindBottomInfo windDir={windDir}>{currentDay.wind_direction[0].toUpperCase()}</Styled.WeatherCardWindBottomInfo>
          </div>
          <div className="weather-card-humidity">
            <h4 className="weather-card-title">Humidity</h4>
            <div className="weather-card-info">{currentDay.humidity}<span>%</span></div>
            <div className="progress-bar-div">
            <ProgressBar variant="warning" now={currentDay.humidity}/>
            </div>
          </div>
          <div className="weather-card-visibility">
          <h4 className="weather-card-title">Visibility</h4>
            <div className="weather-card-info">{currentDay.visibility}<span> miles</span></div>
          </div>
          <div className="weather-card-air">
          <h4 className="weather-card-title">Air Pressure</h4>
            <div className="weather-card-info">{currentDay.air_pressure}<span> mb</span></div>
          </div>
        </div>
      <footer>
        <span className="created-by-text-span">created by Pedr0Leite - devChallenges.io</span>
     </footer>
    </Styled.RightSideMainDiv>);
  }