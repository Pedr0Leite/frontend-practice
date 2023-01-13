import React, { useEffect, useMemo, useState, useReducer, createContext } from 'react';
import './App.css';
import jobsdata from "./jobsdata.json";

//Componentens
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle';
import SearchForm from './components/SearchInput/SearchInput';
import {LocationFilter} from './components/MainJobs/LeftSide/LocationFilter';

import labelIcon from '../src/assets/globe.svg';
import { JobDiv } from './components/MainJobs/RightSide/JobList/JobDiv/JobDiv';
import { SpecificJobPage } from './components/SpecificJobPage/SpecificJobPage';

// Context
export const PaginationContext = React.createContext({});

export const AlwaysTheSameDescriptionContext = React.createContext("");

interface ShowSpecificJobInterface {
  showSpecificJob:Boolean;
  setShowSpecificJob:any;
}

export const ShowSpecificJobContext = React.createContext<ShowSpecificJobInterface | null >(null);

interface SpecificJobSelectedInterface {
  specificJob:Object;
  setSpecificJob:any;
}

export const SpecificJobSelectedContext = React.createContext<SpecificJobSelectedInterface | null >(null);

function App() {
const sameDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

  const [initialData, setInitialData] = useState([...jobsdata.jobs]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const [specificJob, setSpecificJob] = useState({});
  const [showSpecificJob, setShowSpecificJob] = useState(false);
  const [titleTextInput, setTitleTextInput] = useState('');
  const [countryTextInput, setCountryTextInput] = useState('');
  // const {specificLocation, setSpecificLocation} = useState('');
  

  
  /**
   * Source of data -> https://himalayas.app/jobs/api. 
   * for this example, I will use a JSON file due the purpose of this challenge be only Front-end
  */
    useEffect(() => { 

      if(countryTextInput.length === 0){
        setInitialData([...jobsdata.jobs]);
      }

     }, [countryTextInput]);

    // Title search
    const onClickSearch = (e:any) =>{
      e.preventDefault();

      if(titleTextInput.length === 0){
        setInitialData([...jobsdata.jobs]);
      }

      var filteredJobs = initialData.filter(x => x.title.includes(titleTextInput))
      setInitialData([...filteredJobs]);
      setTitleTextInput('');
    }
    

      const onChangeTitleText = (e:any) => {
        e.preventDefault();
        setTitleTextInput(e.target.value);
        
        if(titleTextInput.length === 0){
          setInitialData([...jobsdata.jobs]);
        }
      }

      
      // Location Search
      // Input text search
      const onChangeLocationSearch = (e:any)=> {
        e.preventDefault();
        setCountryTextInput(e.target.value);
        
        if(countryTextInput.length === 0){
          setInitialData([...jobsdata.jobs]);
        }else{
          var filteredJobs = initialData.filter(x => {
            if(x.locationRestrictions.length !== 0){
              return x.locationRestrictions[0].includes(countryTextInput)
            }})
  
          setInitialData([...filteredJobs]);
        }
      }
      
      // Input checkbox search
      const onClickSpecificLocations = (value:string) =>{
      var filteredJobs = [...jobsdata.jobs].filter(x => {
        if(x.locationRestrictions.length !== 0){
          return x.locationRestrictions[0].includes(value)
        }
      })
      setInitialData([...filteredJobs]);
      }


  // Pagination variables
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = initialData.slice(indexOfFirstJob, indexOfLastJob);

  //change page
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <ShowSpecificJobContext.Provider value={{showSpecificJob, setShowSpecificJob}}>
      <SpecificJobSelectedContext.Provider value={{specificJob, setSpecificJob}}>
      <AlwaysTheSameDescriptionContext.Provider value={sameDescription}>
      <HeaderTitle boldPart="Github " content="Jobs"></HeaderTitle>
      {showSpecificJob ? (<> <SpecificJobPage/> </> ) : null}
      {!showSpecificJob ? (
      <>
      <div className="searchinput">
        <SearchForm onChangeTitleText={onChangeTitleText} onClickSearch={onClickSearch} inputValue={titleTextInput}/>
      </div>
      <div className="main-jobs-body">
        <LocationFilter onClickSpecificLocation={onClickSpecificLocations} onChangeLocationSearch={onChangeLocationSearch} labelIcon={labelIcon} />
          <PaginationContext.Provider value={jobsPerPage}>
            <JobDiv
              paginate={paginate}
              loading={loading}
              arrOfFive={currentJobs}
              initialData={initialData}
              totalJobs={initialData.length}
            />
          </PaginationContext.Provider>
      </div>
      </>
      ) : null}
      </AlwaysTheSameDescriptionContext.Provider>
      </SpecificJobSelectedContext.Provider>
      </ShowSpecificJobContext.Provider>
      <footer>
     <span className="created-by-text-span">created by Pedr0Leite - devChallenges.io</span>
     </footer>
    </div>
  );
}

export default App;