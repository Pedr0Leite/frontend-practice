import { useContext, useEffect, useState } from "react";
import { DataContext } from '../context/DataContext';
import { DestinationProps } from '../models/destination.model';
import { CurrentDestinationContext } from '../context/CurrentDestinationContext';
import usePersistentStorage from "./usePersistentStorage";

const useSetDestinationActiveButton = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const { data, setData } = useContext(DataContext);
  const { destinationData, setDestinationData } = useContext(CurrentDestinationContext);
  const {setItemToStorage, getItemFromStorage} = usePersistentStorage();  
  
  useEffect(() => {
    if (selectedBtn === 0) {
      document.getElementById("destination-btn-0")!.classList.add("destination-active-btn");
      document.getElementById("destination-btn-1")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-2")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-3")!.classList.remove("destination-active-btn");
      
    } else if (selectedBtn === 1) {
      document.getElementById("destination-btn-0")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-1")!.classList.add("destination-active-btn");
      document.getElementById("destination-btn-2")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-3")!.classList.remove("destination-active-btn");
      
    } else if (selectedBtn === 2) {
      document.getElementById("destination-btn-0")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-1")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-2")!.classList.add("destination-active-btn");
      document.getElementById("destination-btn-3")!.classList.remove("destination-active-btn");
      
    } else {
      document.getElementById("destination-btn-0")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-1")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-2")!.classList.remove("destination-active-btn");
      document.getElementById("destination-btn-3")!.classList.add("destination-active-btn");
      
    }

    setDestData(selectedBtn);
    
  }, [selectedBtn]);

  const setDestData = (id:number) => {
    if(data.planets[selectedBtn] !== undefined){
    const tempObj = {
      id:id,
      name: data.planets[selectedBtn].name,
      details: data.planets[selectedBtn].details,
      avg_distance: data.planets[selectedBtn].avg_distance,
      est_travel_time: data.planets[selectedBtn].est_travel_time,
      img: `"./../assets/${data.planets[selectedBtn].name.toLocaleLowerCase()}.png"`
      
    } satisfies DestinationProps;
    
    const storedPlanet = getItemFromStorage("dest-" + selectedBtn);
    if(storedPlanet === undefined){
      setItemToStorage("dest-" + selectedBtn, tempObj);
    }

    setDestinationData(tempObj);

  }else{

    let storedPlanet = getItemFromStorage("dest-" + selectedBtn);
    
    if(storedPlanet === undefined){
      setItemToStorage("dest-" + selectedBtn, data.planets[selectedBtn]);
      storedPlanet = getItemFromStorage("dest-" + selectedBtn);
    }

    const tempObj = {
      id:id,
      name: storedPlanet.name,
      details: storedPlanet.details,
      avg_distance: storedPlanet.avg_distance,
      est_travel_time: storedPlanet.est_travel_time,
      img: `"./../assets/${storedPlanet.name.toLocaleLowerCase()}.png"`

    } satisfies DestinationProps;
    
    setDestinationData(tempObj);
  }
  }

  const onBtnClick = (value: number) => {
    setSelectedBtn(value);
  };

  return { selectedBtn, onBtnClick };
};

export default useSetDestinationActiveButton;