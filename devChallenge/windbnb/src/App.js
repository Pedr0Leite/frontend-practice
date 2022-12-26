import './App.css';
import React, { useState, useEffect } from "react";
// import Autocomplete from "react-google-autocomplete";
//https://www.npmjs.com/package/react-google-autocomplete
import data from './stays.json';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [clicked, setClicked] = useState(false);
  const [rawData, setRawData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [countStays, setCountStays] = useState(0);

  

  useEffect(() => {
    setRawData(data);
    let filteredData = rawData.filter(x => x.city === 'Helsinki');
    setSearchedData(filteredData);
    setCountStays(filteredData.length)
    setSearchText('Helsinki');
  }, [])

  const onClickButton = (e) => {
    e.preventDefault();

      filterData(searchText)
  }

  const filterData = (city) => {
    let filteredData = rawData.filter(x => x.city === city )
    setSearchedData(filteredData);
    setCountStays(filteredData.length)
    setClicked(false);
  }

  useEffect(() => {}, [searchedData]);

  
  return (
    <>
    <Header rawData={rawData} clicked={clicked} searchText={searchText} setClicked={setClicked} setSearchText={setSearchText} onClickButton={onClickButton}></Header>
    <div className="body-div">
      <div className="top-div">
        {searchText !== "" ? 
        <>
        <h1 className="top-div-title">Stays in <span>{searchText}</span></h1>
        <h5 className="top-div-counts">{countStays} stays</h5>
        </> : 
        <>
        <h1 className="top-div-title">Search Stays!</h1>
        </>}
        
      </div>
      <div className="options-div-main">
        {

(searchedData.length !== 0 ? searchedData.map((val) => 
<div className="stay-div" alt={val.title}>
  <img src={val.photo} alt={val.title} className="stays-img"></img>
  <div className="stay-div-details-1">
{val.superHost === true ? <div className="super-host"><span>SUPER HOST</span></div> : null}
<div className="stay-type-and-details">
<span className="stay-type">{val.type}</span>
<span className="stay-rating">{val.rating}</span>
</div>
  </div>
  <div className="stay-div-details-2">
    <span>{val.title}</span>
  </div>
</div>

 ) : null)
        }
        </div>
      </div>
      <Footer clicked={clicked}></Footer>
    </>
  );
}

export default App;
