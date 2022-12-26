import React, { useState, useEffect } from "react";

export default function Header({clicked, searchText, setClicked, setSearchText, onClickButton, rawData}) {

    const [adultNumber, setAdultNumber] = useState(0);
    const [childrenNumber, setChildrenNumber] = useState(0);
    const [showGuests, setShowGuests] = useState(false);
    const [textResults, setTextResults] = useState([]);

    //Auto search the options
    useEffect(() => {
        if(searchText !== ''){
            var cities = rawData.map(x => x.city);
            let tempCities = [];
            cities.forEach((city, i) => {
                if(city.startsWith(searchText)){
                    setTextResults(city);
                    tempCities.push(city);
                }
            })            
            setTextResults([...new Set(tempCities)])
            
            //only show 5 results
            if(textResults.length > 5){
                setTextResults([...textResults.slice(0, 5)])
            }
        }else{
            setTextResults([]);
        }

      }, [searchText])

    const closeButton = (e) => {
        e.preventDefault();
        setClicked(false);
      };
      

    const onFocusGuestsInput = (e) =>{
        e.preventDefault();
        if(clicked === true){
          // setClicked(false)
        }else{
          setClicked(true)
        }
    
        if(!showGuests){
          setShowGuests(true);
          document.getElementsByClassName('ul-list-guests')[0].style.display = 'none'; 
        }else{
          setShowGuests(false);
          document.getElementsByClassName('ul-list-guests')[0].style.display = ''; 
        }
      }
    
      const onFocusLocationInput = (e) =>{
        e.preventDefault();
        if(clicked === true){
        }else{
          setClicked(true)
        }
      }
      
      const onChangeLocationText = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
      }

      const onClickAddNumber = (buttonName, action) => {
        if(action === 'increase'){
          if(buttonName === 'adult'){
            setAdultNumber((prev) => prev + 1)
          }else{
            setChildrenNumber((prev) => prev + 1)
          }
        }else{
          if(buttonName === 'adult'){
            setAdultNumber((prev) => prev - 1)
          }else{
            setChildrenNumber((prev) => prev - 1)
          }
        }
       
      }

    return(
        <header className={clicked === false ? "header-main" : "header-main-big"}>
    {clicked === true ? <span onClick={(e)=> {closeButton(e)}} className="close"></span> : null}
      {clicked === false ? (<div className="header-logo-div">
        <img id="header-logo" src="../logo.png" alt="logo"/>
      </div>) : null}
      <div className={clicked === false ? "header-search-input-div" : "header-search-input-div-big"}>
      {/* <Autocomplete placeholder="Add location" className={clicked === false ? "header-search-input-location" : "header-search-input-location-big"} apiKey={APIKEY} onPlaceSelected={(place) => {console.log(place)}}/> */}
        <div className={clicked === false ? "header-search-input-location" : "header-search-input-location-big"}>
        <p>Locations</p>
        <input id="input-location" placeholder="Add location" type="text" onChange={(e) => {onChangeLocationText(e)}} onClick={(e) => {onFocusLocationInput(e)}}></input>
            <div className="search-input-location-results">
        {(clicked && textResults.length !== 0) && textResults.map((val) =>(
        <span>{val}</span>
        )
        )}
            </div>
        </div>
        <div className={clicked === false ? "header-search-input-guests" : "header-search-input-guests-big"}>
          <p>Guests</p>
        <input placeholder="Add guest" type="text" onClick={(e) => {onFocusGuestsInput(e)}}></input>
       {clicked && <ul className="ul-list-guests">
          <li><div className="header-search-input-guests-adult">
              <p>Adults</p>
              <p>Ages 13 or above</p>
              <div className="incrementgroup">
<button className="inc button" onClick={() => onClickAddNumber('adult', 'increase')}>+</button>
  <input type="text" name="numbers" value={adultNumber} className="number" />
  <button className="button" onClick={() => onClickAddNumber('adult', 'decrease')}>-</button>
</div>
              </div>
            </li>
          <li><div className="header-search-input-guests-children">
              <p>Children</p>
              <p>Ages 2-12</p>
              <div className="incrementgroup">
<button className="inc button" onClick={() => onClickAddNumber('children', 'increase')}>+</button>
  <input type="text" name="numbers" value={childrenNumber} className="number" />
  <button className="button" onClick={() => onClickAddNumber('children', 'decrease')}>-</button>
</div>
              </div>
          </li>
        </ul>}
        </div>
        <button id="header-search-button" className={clicked === false ? "header-search-button" : "header-search-button-big"} onClick={(e) => {onClickButton(e)}}></button>
      </div>
    </header>
    )
}
