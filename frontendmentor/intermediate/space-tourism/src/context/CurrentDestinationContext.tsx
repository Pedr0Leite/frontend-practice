import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import fakedata from "../fakedata.json";
import { DestinationProps } from '../models/destination.model';

interface CurrentDestinationContextPropsInterface {
    children: ReactNode;
  }

interface CurrentDestinationContextInterface {
    destinationData: DestinationProps,
    setDestinationData: (data:DestinationProps) => void;
}

export const CurrentDestinationContext = React.createContext<CurrentDestinationContextInterface>({
    destinationData: {id: 0, name: "", details: "", avg_distance: "", est_travel_time: ""},
    setDestinationData: function(destinationData:object){
        return destinationData;
    }
});

export function CurrentDestinationProvider({ children }: CurrentDestinationContextPropsInterface) {
    const [destinationData, setDestinationData] = useState<DestinationProps>({id:0, name: "", details: "", avg_distance: "", est_travel_time: ""});

    useEffect(() =>{
        setDestinationData({
            id: 0,
            name:fakedata.planets[0].name, 
            details:fakedata.planets[0].details, 
            avg_distance:fakedata.planets[0].avg_distance, 
            est_travel_time:fakedata.planets[0].est_travel_time});
    }, [])

    return (
        <CurrentDestinationContext.Provider value={{destinationData, setDestinationData}}>
        {children}
      </CurrentDestinationContext.Provider>
    )

}