import React from 'react';
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import fakedata from "../fakedata.json";

interface DataProviderPropsInterface {
    children: ReactNode;
  }

interface DataContextInterface {
    data: object,
    setData: (data:object) => void;
}

export const DataContext = React.createContext<DataContextInterface>({
    data: {},
    setData: function(data:object){
        return data;
    }
});

export function DataProvider({ children }: DataProviderPropsInterface) {

    const [data, setData] = useState({});

    useEffect(() =>{
        setData(fakedata);
    }, [])

    return (
        <DataContext.Provider value={{data, setData}}>
        {children}
      </DataContext.Provider>
    )

}