import React, { useContext } from 'react';

export type ImgUploadedStringContent = {
    imageString: string,
    setImageString: (x: string) => void;
  }
  
  export const ImgUploadedStringContext = React.createContext<ImgUploadedStringContent>({
    imageString: '',
    setImageString: () => {}
  });

  export const useImgUploadedContext = () => useContext(ImgUploadedStringContext);