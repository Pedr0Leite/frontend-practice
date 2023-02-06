import { useEffect, useState } from "react";
import { persistentStorage } from "../models/persistentStorage.model";

const usePersistentStorage = <T>(id?: string, value?: object) => {
      // const [storage, setStorage] = useState<T>();
      const [storage, setStorage] = useState<Object>();

    const setItemToStorage = (id:string, value: object) => {
      setStorage({id:id, value: value});
      return persistentStorage.setItem(id, value);
  } 

    const getItemFromStorage = (id:string) => {
        return persistentStorage.getItem(id);
    }
  
    return {getItemFromStorage, setItemToStorage, storage};

}

export default usePersistentStorage;