import ThunderIcon from '../assets/Thunderstorm.png';
import ShowerIcon from '../assets/Shower.png';
import ClearIcon from '../assets/Clear.png';
import HailIcon from '../assets/Hail.png';
import HeavyCloudIcon from '../assets/HeavyCloud.png';
import HeavyRainIcon from '../assets/HeavyRain.png';
import LightCloudIcon from '../assets/LightCloud.png';
import LightRainIcon from '../assets/LightRain.png';
import SleetIcon from '../assets/Sleet.png';
import SnowIcon from '../assets/Snow.png';

export const ACTIONS_ICON = {
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

export function getIcon(iconString:string){
    let icon = '';
    
    switch (iconString[0]) {
      case ACTIONS_ICON.SHOWER:
        icon = ShowerIcon;
        break;
      case ACTIONS_ICON.CLEAR:
        icon = ClearIcon;
        break;
      case ACTIONS_ICON.HAIL:
        icon = HailIcon;
        break;
      case ACTIONS_ICON.HEAVYCLOUD:
        icon = HeavyCloudIcon;
        break;
      case ACTIONS_ICON.HEAVYRAIN:
        icon = HeavyRainIcon;
        break;
      case ACTIONS_ICON.LIGHTCLOUD:
        icon =LightCloudIcon;
        break;
      case ACTIONS_ICON.LIGHTRAIN:
        icon = LightRainIcon;
        break;
      case ACTIONS_ICON.SLTEET:
        icon = SleetIcon;
        break;
      case ACTIONS_ICON.SNOW:
        icon = SnowIcon;
        break;
      case ACTIONS_ICON.THUNDERSTORM:
        icon = ThunderIcon;
        break;
    }
    return icon;
  }

export function reducerWeatherIcon(icon:string, action:any) {
    icon = getIcon(action.type);
    return icon;
 }