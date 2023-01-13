import { HTMLAttributes, ReactNode, useState, useReducer, useEffect } from 'react';
import * as Styled from './LeftSideInfoDiv.styled';

import { reducerWeatherIcon } from '../../../hooks/ReducerWeatherIcon';

import CloudBackground from '../../../assets/Cloud-background.png';

interface LeftSideInfoDivProps extends HTMLAttributes<HTMLHeadingElement> {
    // children: ReactNode;
    city:String;
    currentDay:any;
    onClickSearchPlaceProp: (e:any) => void;
  }

export function LeftSideInfoDiv({city, currentDay, onClickSearchPlaceProp,...props }: LeftSideInfoDivProps) {

    const [icon, dispatchIconName] = useReducer(reducerWeatherIcon, '');
    useEffect(() => { 
        dispatchIconName({type: currentDay.weather_state});
      }, [city])

      const onClickSearchPlace = (e:any) =>{
        e.preventDefault();
        onClickSearchPlaceProp(e)
      }

      const todaysDate = new Date().toDateString();
      

    return (
<>
            <div className="leftside-search-info">
            <div className="leftside-search-button">
              <button onClick={(e:any) => {onClickSearchPlace(e)}} className="leftside-button-search-for-places">Seach for places</button>
            </div>
            <div className="leftside-search-gps">
              <button className="leftside-button-gps"></button>
            </div>
            </div>
            <Styled.LeftsideWeatherIconDiv iconName={CloudBackground}>
                <Styled.LeftsideWeatherIcon iconName={icon}></Styled.LeftsideWeatherIcon>
            </Styled.LeftsideWeatherIconDiv>
          <div className="leftside-weather-temp"><span>{currentDay.weather_temp_c[0]}</span>ºC</div>
            <div className="leftside-weather-info">{currentDay.weather_state}</div>
            <div className="leftside-date">{todaysDate}</div>
            <div className="leftside-location">{city}</div>
            </>
    )
}