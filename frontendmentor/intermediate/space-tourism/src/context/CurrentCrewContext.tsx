import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import fakedata from "../fakedata.json";
import { CrewProps } from '../models/crew.model';

interface CurrentCrewContextPropsInterface {
    children: ReactNode;
  }

interface CurrentCrewContextInterface {
    crewData: CrewProps,
    setCrewData: (data:CrewProps) => void;
}

export const CurrentCrewContext = React.createContext<CurrentCrewContextInterface>({
    crewData: {"id": 0,"role":"", "details":"", "name":"", "img": ""},
    setCrewData: function(crewData:object){
        return crewData;
    }
});

export function CurrentCrewProvider({ children }: CurrentCrewContextPropsInterface) {
    const [crewData, setCrewData] = useState<CrewProps>({"id": 0,"role":"", "details":"", "name":"", "img":""});

    useEffect(() =>{
        setCrewData({"id": 0,"role":fakedata.crew[0].role, "details":fakedata.crew[0].details, "name":fakedata.crew[0].name, "img":""});
    }, [])

    return (
        <CurrentCrewContext.Provider value={{crewData, setCrewData}}>
        {children}
      </CurrentCrewContext.Provider>
    )

}