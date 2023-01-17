import React, { useContext } from 'react';

export type ImgUploadedContent = {
    imageCreated: boolean,
    setImageCreated: (x: boolean) => void;
  }
  
  export const ImgUploadedContext = React.createContext<ImgUploadedContent>({
    imageCreated: false,
    setImageCreated: () => {}
  });

  export const useImgUploadedContext = () => useContext(ImgUploadedContext);