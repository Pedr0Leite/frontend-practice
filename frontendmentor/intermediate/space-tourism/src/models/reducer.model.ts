//Main page background
export enum REDUCER_MAIN_BG {
  HOME_BG = '',
  DESTINATION_BG = 'destination',
  CREW_BG = 'crew',
  TECH_BG = 'tech'
}

export type reducerBGAction = 
{type:REDUCER_MAIN_BG.HOME_BG} 
| {type:REDUCER_MAIN_BG.DESTINATION_BG} 
| {type:REDUCER_MAIN_BG.CREW_BG} 
| {type:REDUCER_MAIN_BG.TECH_BG};

//Crew page image
export enum REDUCER_PLANETS {
  MOON = 'moon',
  MARS = 'mars',
  EUROPA = 'europa',
  TITAN = 'titan'
}

export type reducerPlanets = 
{type:REDUCER_PLANETS.MOON} 
| {type:REDUCER_PLANETS.MARS} 
| {type:REDUCER_PLANETS.EUROPA} 
| {type:REDUCER_PLANETS.TITAN};