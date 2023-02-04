import { useContext, useEffect, useState } from "react";
import { DataContext } from '../context/DataContext';
import { CrewProps } from '../models/crew.model';
import { CurrentCrewContext } from '../context/CurrentCrewContext';
import usePersistentStorage from "./usePersistentStorage";

const useSetCrewActiveButton = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const { data, setData } = useContext(DataContext);
  const { crewData, setCrewData } = useContext(CurrentCrewContext);
  const {setItemToStorage, getItemFromStorage} = usePersistentStorage();
  
  useEffect(() =>{
  if(data.crew[selectedBtn] !== undefined){
    const tempObj = {
      id: selectedBtn,
      role: data.crew[selectedBtn].role,
      name: data.crew[selectedBtn].name,
      details: data.crew[selectedBtn].details,
      img: `"../assets/crew-${selectedBtn}.png"`
    } satisfies CrewProps;
    
    setCrewData(tempObj)
    const storedCrew = getItemFromStorage("crew-" + selectedBtn);
    if(storedCrew === undefined){
      setItemToStorage("crew-" + selectedBtn, tempObj);
    }

  }else{
    let storedCrew = getItemFromStorage("crew-" + selectedBtn);
    
    if(storedCrew === undefined){
      setItemToStorage("crew-" + selectedBtn, data.crew[selectedBtn]);
      storedCrew = getItemFromStorage("crew-" + selectedBtn);
    }

    const tempObj = {
      id: selectedBtn,
      role: storedCrew.role,
      name: storedCrew.name,
      details: storedCrew.details,
      img: `"../assets/crew-${selectedBtn}.png"`
    } satisfies CrewProps;
    
    setCrewData(tempObj)
  }
  }, [selectedBtn])


  useEffect(() => {

    const buttons = document.getElementsByClassName("crew-btn");

    Array.prototype.forEach.call(buttons, (btn) => {
      if (!btn.id.includes(selectedBtn)) {
        btn.classList.remove("active-btn");
      } else {
        btn.classList.add("active-btn");
      }
    });

  }, [selectedBtn]);

  const onBtnClick = (value: number) => {
    setSelectedBtn(value);
  };

  return { selectedBtn, onBtnClick };
};

export default useSetCrewActiveButton;