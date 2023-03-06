import { useContext, useEffect, useState } from "react";
import { DataContext } from '../context/DataContext';
import { TechProps } from '../models/tech.model';
import { CurrentdTechContext } from '../context/CurrentTechContext';
import usePersistentStorage from "./usePersistentStorage";

const useSetTechActiveButton = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const { data, setData } = useContext(DataContext);
  const { techData, setTechData } = useContext(CurrentdTechContext);
  const {setItemToStorage, getItemFromStorage} = usePersistentStorage();  
  
  useEffect(() => {
    const buttons = document.getElementsByClassName("tech-btn");

    Array.prototype.forEach.call(buttons, (btn) => {
      if (!btn.id.includes(selectedBtn)) {
        btn.classList.remove("tech-active-btn");
      } else {
        btn.classList.add("tech-active-btn");
      }
    });

    setDestData(selectedBtn);

  }, [selectedBtn]);

  
  const setDestData = (id:number) => {
    if(data.technology[selectedBtn] !== undefined){
    const tempObj = {
      id:id,
      name: data.technology[selectedBtn].name,
      details: data.technology[selectedBtn].details,
      img: `"./../assets/tech-${selectedBtn}"`
      
    } satisfies TechProps;
    
    const storedTech = getItemFromStorage("tech-" + selectedBtn);
    if(storedTech === undefined){
      setItemToStorage("tech-" + selectedBtn, tempObj);
    }

    setTechData(tempObj);

  }else{

    let storedTech = getItemFromStorage("tech-" + selectedBtn);
    
    if(storedTech === undefined){
      setItemToStorage("tech-" + selectedBtn, data.technology[selectedBtn]);
      storedTech = getItemFromStorage("tech-" + selectedBtn);
    }

    const tempObj = {
      id:id,
      name: storedTech.name,
      details: storedTech.details,
      img: `"./../assets/tech-${selectedBtn}"`

    } satisfies TechProps;
    
    setTechData(tempObj);
  }
  }

  const onBtnClick = (value: number) => {
    setSelectedBtn(value);
  };

  return { selectedBtn, onBtnClick };

}


export default useSetTechActiveButton;