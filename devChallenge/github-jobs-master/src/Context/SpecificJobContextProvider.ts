import React, { createContext } from 'react';

const initialObj = {
    "title":"",
    "excerpt":"",
    "image":"",
    "companyName":"",
    "companyLogo":"",
    "locationRestrictions":[],
    "timezoneRestrictions":[],
    "categories":[],
    "description":"",
    "pubDate":0,
    "expiryDate":0,
    "applicationLink":"",
    "guid":""
 };

 interface SpecificJobSelectedInterface {
  specificJob:Object;
  setSpecificJob:any;
}

export const SpecificJobSelectedContext = React.createContext<SpecificJobSelectedInterface | null >(null);