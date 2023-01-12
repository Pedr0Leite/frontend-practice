import React, {useEffect, useState} from 'react';
import './App.css';
import weatherfakedata from "./weatherfakedata.json";

import { LeftSideMainDiv } from "./components/leftside/LeftSideMainDiv";
import { RightSideMainDiv } from "./components/rightside/RightSideMainDiv";
import { LeftSideInfoDiv } from './components/leftside/LeftSideInfoDiv/LeftSideInfoDiv';

function App() {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState(weatherfakedata[0]);
  const [showSearchPlaces, setShowSearchPlaces] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchLocationButtons, setSearchLocationButtons] = useState(['London', 'Amsterdam', 'Shelby']);
  
const onClickSearchPlace = (e:any) =>{
  e.preventDefault();
setShowSearchPlaces(true);
}

const onClickCloseSearchPlaces = (e:any) =>{
  e.preventDefault();
  setShowSearchPlaces(false);
  
}

const onClickSearchData = (e:any) => {
  e.preventDefault();
  let cityWord = '';

  if(searchLocation === ''){
    cityWord = e.target.innerText;
  }else{
    cityWord = searchLocation;
  }

  var filteredCities = weatherfakedata.filter(x => x.city.includes(cityWord))
  setSearchLocationButtons([filteredCities[0].city])
  setWeatherData(filteredCities[0])
  setSearchLocation('');
}

const onClickSpecificOptions = (e:any) => {
  e.preventDefault();
  var filteredCities = weatherfakedata.filter(x => x.city.includes(searchLocation))
  setSearchLocationButtons([filteredCities[0].city])
  setSearchLocation('');
}

const onChangeSearchHandler = (e:any) => {
  e.preventDefault();
  setSearchLocation(e.target.value);
}


return (
  <div className="App">
      <LeftSideMainDiv showSearch={showSearchPlaces}>
          {!showSearchPlaces ? 
            <LeftSideInfoDiv city={weatherData.city} currentDay={weatherData.currentDay} onClickSearchPlaceProp={(e:any) =>{onClickSearchPlace(e)}}></LeftSideInfoDiv>      
            : <>
            <div className="leftside-search">
              <div onClick={(e:any) => {onClickCloseSearchPlaces(e)}}className="leftside-search-button-close">X</div>
              <div className="leftside-search-form">
              <form>
                <input onChange={(e:any)=> {onChangeSearchHandler(e)}} value={searchLocation} placeholder='&#128269; search location'>
                </input>
                <button onClick={(e:any) => {onClickSpecificOptions(e)}}>Search</button>
              </form>
              </div>
              <div className="search-form-results">
              {searchLocationButtons.map((x:any) => {
                return(
                <>
                <button key={x.city} onClick={(e:any) => {onClickSearchData(e)}}>{x}</button>
                </>
                )
              })
            }
            </div>
            </div>
            </>}
      </LeftSideMainDiv>
        <RightSideMainDiv city={weatherData.city} currentDay={weatherData.currentDay} nextDays={weatherData.nextDays}>
     </RightSideMainDiv>
    </div>
  );
}

export default App;