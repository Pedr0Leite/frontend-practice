import styled from 'styled-components';

interface LeftsideWeatherIconDivProps {
    iconName:any;
  }

interface LeftsideWeatherIconProps {
    iconName:any;
  }

export const LeftsideWeatherIconDiv = styled.div<LeftsideWeatherIconDivProps>`
    width: 100%;
    height: 250px;
    background: ${props => `url(${props.iconName})`};
    background-size: 150% 125%;
    background-repeat: no-repeat;
    background-position-y: -25px;
    background-position-x: -84px;
  
    display: flex;
    justify-content: center;
    align-content: center;
`

export const LeftsideWeatherIcon = styled.div<LeftsideWeatherIconProps>`
    align-self: center;
    background: ${props => `url(${props.iconName})`};
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: center;
    background-position-x: center;
  
`