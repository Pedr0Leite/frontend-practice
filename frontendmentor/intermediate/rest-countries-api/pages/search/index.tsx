import SearchMain from '@/components/SearchPage/SearchMain';
import React, { useState } from 'react';

//Runs at build time
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,flag,region,subregion,population,capital,languages,idd,borders,currencies,tld");
  const dataObj = await res.json();
  
  return {
    props: { countryData: dataObj }
  }

  };
  
  interface CountryInterface {
    countryData: Array<Object>
  }
  
  export default function Search({countryData}:CountryInterface) {

  return (<>
  <SearchMain data={countryData}/>
  </>
  )
}
