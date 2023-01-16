import React, { useContext } from 'react';

export type UploadContent = {
    uploading: boolean,
    setUploading: (x: boolean) => void;
  }
  
  export const UploadingContext = React.createContext<UploadContent>({
    uploading: false,
    setUploading: () => {}
  });

  export const useUploadingContext = () => useContext(UploadingContext);