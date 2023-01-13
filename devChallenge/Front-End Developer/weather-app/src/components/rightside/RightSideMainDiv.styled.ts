import styled from 'styled-components';

interface RightsideWeatherDaysCardIcon1Props {
    iconName:any;
  }
interface RightsideWeatherDaysCardIcon2Props {
    iconName:any;
  }
interface RightsideWeatherDaysCardIcon3Props {
    iconName:any;
  }
interface RightsideWeatherDaysCardIcon4Props {
    iconName:any;
  }
interface RightsideWeatherDaysCardIcon5Props {
    iconName:any;
  }
interface WeatherCardWindBottomInfoProps {
    windDir:any;
  }


export const RightSideMainDiv = styled.div`
background: #100E1D;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 0px 150px 0 150px;

  @media (max-width: 1350px) {
    padding: 0px 50px 0 50px;
}

  @media (max-width: 900px) {
    width: 100vw;
    padding: 10px;
    row-gap: 10px;
}
`

export const RightsideWeatherDaysCardIcon1 = styled.div<RightsideWeatherDaysCardIcon1Props>`
  align-self: center;
  background: ${props => `url(${props.iconName})`};
  width: 100%;
  height: 45%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
`
export const RightsideWeatherDaysCardIcon2 = styled.div<RightsideWeatherDaysCardIcon2Props>`
  align-self: center;
  background: ${props => `url(${props.iconName})`};
  width: 100%;
  height: 45%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
`
export const RightsideWeatherDaysCardIcon3 = styled.div<RightsideWeatherDaysCardIcon3Props>`
  align-self: center;
  background: ${props => `url(${props.iconName})`};
  width: 100%;
  height: 45%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
`
export const RightsideWeatherDaysCardIcon4 = styled.div<RightsideWeatherDaysCardIcon4Props>`
  align-self: center;
  background: ${props => `url(${props.iconName})`};
  width: 100%;
  height: 45%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
`
export const RightsideWeatherDaysCardIcon5 = styled.div<RightsideWeatherDaysCardIcon5Props>`
  align-self: center;
  background: ${props => `url(${props.iconName})`};
  width: 100%;
  height: 45%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
`

export const WeatherCardWindBottomInfo = styled.div<WeatherCardWindBottomInfoProps>`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  
  height: 40px;
  color: #E7E7EB;

  &::before {
    background-image: ${props => `url(${props.windDir})`};
    background-size: 25px 28px;
    display: inline-block;
    width: 40px;
    height: 40px;
    content: "";
    background-repeat: no-repeat;
    background-position-y: 7px;
    background-color: gray;
    border-radius: 50%;
    background-position-x: 6px;
  }
`