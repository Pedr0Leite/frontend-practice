import { useEffect, useState } from "react";
import { persistentStorage } from "../models/persistentStorage.model";

// const usePersistentStorage = <T>(id: string, initialValue?: T) => {
const usePersistentStorage = <T>(id?: string, value?: object) => {
    // const [storage, setStorage] = useState<T>(() => {
      // const valueFromStorage = persistentStorage.getItem(id);
      const [storage, setStorage] = useState<T>();
      
    // if ( typeof initialValue === "object" && !Array.isArray(initialValue) && initialValue !== null) {
    //     return {
    //       ...initialValue,
    //       ...valueFromStorage,
    //     }
    //   }
  
    //   return valueFromStorage || initialValue;
    // })
  
    // useEffect(() => {
    //   persistentStorage.setItem(id, storage);
    // }, [id, storage]);

    const setItemToStorage = (id:string, value: object) => {
      return persistentStorage.setItem(id, value);
  } 

    const getItemFromStorage = (id:string) => {
        return persistentStorage.getItem(id);
    }
  
    // return [storage, setStorage, getItemFromStorage, setItemToStorage] as const
    return {getItemFromStorage, setItemToStorage};

}

export default usePersistentStorage;