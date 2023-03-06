import { REDUCER_MAIN_BG, reducerBGAction, REDUCER_PLANETS, reducerPlanets } from '../../models/reducer.model';

import homeBG from "../../assets/home-background.jpg";
import destinationBG from "../../assets/destination-background.jpg";
import crewBG from "../../assets/crew-background.png";
import techBG from "../../assets/tech-background.jpg";

import moon from "../../assets/moon.png";
import mars from "../../assets/mars.png";
import europa from "../../assets/europa.png";
import titan from "../../assets/titan.png";

export function reducerBG(state:string, action:reducerBGAction) {
    switch(action.type){
        case REDUCER_MAIN_BG.HOME_BG:
            state = homeBG;
            break;
        case REDUCER_MAIN_BG.DESTINATION_BG:
            state = destinationBG;
            break;
        case REDUCER_MAIN_BG.CREW_BG:
            state = crewBG;
            break;
        case REDUCER_MAIN_BG.TECH_BG:
            state = techBG;
            break;
    }
    return state;
}

export function reducerPlanet(state:string, action:reducerPlanets) {
    switch(action.type){
        case REDUCER_PLANETS.MOON:
            state = moon;
            break;
        case REDUCER_PLANETS.MARS:
            state = mars;
            break;
        case REDUCER_PLANETS.EUROPA:
            state = europa;
            break;
        case REDUCER_PLANETS.TITAN:
            state = titan;
            break;
    }
    return state;
}