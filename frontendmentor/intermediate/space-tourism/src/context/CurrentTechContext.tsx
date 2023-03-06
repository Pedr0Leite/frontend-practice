import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import fakedata from "../fakedata.json";
import { TechProps } from '../models/tech.model';

interface CurrentdTechContextPropsInterface {
    children: ReactNode;
  }

interface CurrentdTechContextInterface {
    techData: TechProps,
    setTechData: (data:TechProps) => void;
}

export const CurrentdTechContext = React.createContext<CurrentdTechContextInterface>({
    techData: {id: 0, name: "", details: ""},
    setTechData: function(techData:object){
        return techData;
    }
});

export function CurrentdTechProvider({ children }: CurrentdTechContextPropsInterface) {
    const [techData, setTechData] = useState<TechProps>({id:0, name: "", details: ""});

    useEffect(() =>{
        setTechData({
            id: 0,
            name:fakedata.technology[0].name, 
            details:fakedata.technology[0].details});
    }, [])

    return (
        <CurrentdTechContext.Provider value={{techData, setTechData}}>
        {children}
      </CurrentdTechContext.Provider>
    )

}