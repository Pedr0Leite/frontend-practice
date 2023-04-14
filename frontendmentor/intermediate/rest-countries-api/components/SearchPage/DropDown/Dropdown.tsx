import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Search.module.css";
import arrowDown from "../../../public/icons/arrow-down.svg";
import CloseIcon from "./CloseIcon";

interface DropDownInterface {
  placeHolder: string;
  options: Array<any>;
  isMulti?: Boolean;
  handleSelectedTag: (data: Array<string>) => void;
}

export default function Dropdown({ placeHolder, options, isMulti, handleSelectedTag }: DropDownInterface) {

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Array<string> | null >(isMulti ? [] : null);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);

    return() => {
      window.removeEventListener("click", handler);
    };
  })

  useEffect(() => {
    if(selectedValue && selectedValue.length != 0){
      handleSelectedTag(selectedValue);
    }
  }, [selectedValue])

  const handleInputClick = (e:Event) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  }

  const getDisplay = () => {

    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }

    if (isMulti) {
      return (
          <div className="dropdown-tags">
              {selectedValue && selectedValue.map((_option) => (
                  <div key={_option} className="dropdown-tag-item">
                      {_option}
                      <span onClick={(e:any) => onTagRemove(e, _option)} className="dropdown-tag-close"><CloseIcon /></span>
                  </div>
              ))}
          </div>
      );
  }
  return selectedValue
  };

  const onItemClick = (option:any) => {
    let newValue;
    if (isMulti) {
        if (selectedValue && selectedValue.findIndex((o) => o === option) >= 0) {
            newValue = removeOption(option);
        } else {
          if(selectedValue){
            newValue = [...selectedValue, option];
          }
        }
    } else {
        newValue = option;
    }
    setSelectedValue(newValue);
  }

  const isSelected = (option:any) => {
    if (isMulti) {

      if(selectedValue){
        return selectedValue.filter((o) => o === option).length > 0;
      }
  }
    if(!selectedValue){
      return false;
    }

    return selectedValue === option;
  }

  const removeOption = (_option:any) => {
    if(selectedValue){
      return selectedValue.filter((o) => o !== _option);
    }else{
      return null;
    }
};

  const onTagRemove = (e:Event, option:any) => {
    e.stopPropagation();
    setSelectedValue(removeOption(option));
};


  return (
    <>
      <div className={styles.dropdownContainer}>
        <div onClick={(e:any) => handleInputClick(e)} className={styles.dropdownInput}>
          <div className={styles.dropdownSelectedValue}>{getDisplay()}</div>
         <div className={styles.dropdownTools}>
           <div className={styles.dropdownTool}>
              <Image src={arrowDown} width={10} height={10} alt="arrowDown" />
            </div>
          </div>
        </div>
        {showMenu &&  <div className={styles.dropdownMenu}>
          {options && options.map((_option) => (
            <div onClick={() => onItemClick(_option)} key={_option} className={`${styles.dropdownItem} ${isSelected(_option) && "selected"}`}>
              {_option}
            </div>
          ))}
        </div>}
      </div>
    </>
  );
}

