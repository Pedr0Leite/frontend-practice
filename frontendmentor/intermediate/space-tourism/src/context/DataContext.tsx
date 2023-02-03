import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import fakedata from "../fakedata.json";

interface DataProviderPropsInterface {
    children: ReactNode;
  }

interface planetsModel {
    "name":string,
    "details":string,
    "avg_distance":string,
    "est_travel_time":string
} 

interface crewModel {
    "role":string,
    "name":string,
    "details":string
}  
interface techModel {
    "name":string,
    "details":string
}  

interface dataModel {
    "planets": Array<planetsModel>,
    "crew": Array<crewModel>,
    "technology": Array<techModel>
}

interface DataContextInterface {
    data: dataModel,
    setData: (data:dataModel) => void;
}

export const DataContext = React.createContext<DataContextInterface>({
    data: {"planets" : [], "crew":[], "technology":[]},
    setData: function(data:object){
        return data;
    }
});

export function DataProvider({ children }: DataProviderPropsInterface) {
    const [data, setData] = useState<dataModel>({"planets" : [], "crew":[], "technology":[]});

    useEffect(() =>{
        setData({"planets" : [...fakedata.planets], "crew":[...fakedata.crew], "technology":[...fakedata.technology]});
    }, [])

    return (
        <DataContext.Provider value={{data, setData}}>
        {children}
      </DataContext.Provider>
    )

}