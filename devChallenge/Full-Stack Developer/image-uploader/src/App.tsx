import React, { useEffect, useState, useContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { FileUploadComponent } from '../src/components/FilesUploadComponent';
import { UploadingComponent } from '../src/components/UploadingComponent';
import { UploadingContext } from './context/UploadingContext';

function App() {

const [uploading, setUploading] = useState<boolean>(false);

  return (
    <UploadingContext.Provider value={{uploading, setUploading}}>
    <div className="App">
        {uploading === true ?
         <UploadingComponent></UploadingComponent> 
         :
         <FileUploadComponent></FileUploadComponent>
         }
    </div>
    </UploadingContext.Provider>
  );
}

export default App;
