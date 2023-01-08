import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { HeaderTitle } from './components/HeaderTitle/HeaderTitle';
import SearchForm from './components/SearchInput/SearchInput';
import {LocationFilter} from './components/MainJobs/LeftSide/LocationFilter';

import labelIcon from '../src/assets/globe.svg';
import { JobDiv } from './components/MainJobs/RightSide/JobList/JobDiv/JobDiv';

function App() {

  const [initialData, setInitialData] = useState('');
  const [loading, setLoading] = useState(false);
  const URL = 'https://himalayas.app/jobs/api';

  useEffect(()=>{
    let cancel: any;
    setLoading(true);
    
    axios.get(URL, {
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
    .then(async (res) => {
          console.log(res);
          //prevent race conditions from multiple requests
        return () => cancel()
        });
  }, [])

  return (
    <div className="App">
      <HeaderTitle boldPart="Github " content="Jobs"></HeaderTitle>
      <div className="searchinput">
        <SearchForm />
      </div>
      <div className="main-jobs-body">
        <LocationFilter labelIcon={labelIcon}/>
        <JobDiv/>
      </div>
    </div>
  );
}

export default App;
