import React, { useEffect, useState, useContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { FileUploadComponent } from './components/Cards/UploadCard/FilesUploadComponent';
import { UploadingComponent } from './components/Uploading/UploadingComponent';
import { FileCreatedComponent } from './components/Cards/CreatedCard/FileCreatedComponent';

import { UploadingContext } from './context/UploadingContext';
import { ImgUploadedContext } from './context/ImgUploadedContext';
import { ImgUploadedStringContext } from './context/ImgUploadedStringContext';

function App() {

const [uploading, setUploading] = useState<boolean>(false);
const [imageCreated, setImageCreated] = useState<boolean>(false);
const [imageString, setImageString] = useState<string>('');


  return (
    <UploadingContext.Provider value={{uploading, setUploading}}>
    <ImgUploadedContext.Provider value={{imageCreated, setImageCreated}}>
    <ImgUploadedStringContext.Provider value={{imageString, setImageString}}>
    <div className="App">
        {uploading === true && imageCreated === false ?
         <UploadingComponent></UploadingComponent> 
         :
         (imageCreated === false ? 
          <FileUploadComponent></FileUploadComponent>
          : <FileCreatedComponent></FileCreatedComponent>)
        }
        {/* <FileCreatedComponent></FileCreatedComponent> */}
    </div>
    </ImgUploadedStringContext.Provider>
    </ImgUploadedContext.Provider>
    </UploadingContext.Provider>
  );
}

export default App;
