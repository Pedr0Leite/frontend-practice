import React, { HTMLAttributes, ReactNode, useState, useRef, useContext, useEffect } from 'react';
import { DragAndDropComponent } from '../components/DragAndDropComponent';
import { UploadingContext } from '../context/UploadingContext';

import axios from 'axios';

export function FileUploadComponent({ ...props }) {
    
    const [file, setFile] = useState<File>();
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>('');
    const { uploading, setUploading } = useContext(UploadingContext);
    
    const handleFileChange = (event: any) => {
        const fileObj = event.target.files && event.target.files[0];
        
        if (!fileObj) {
            return;
        }
        setFile(fileObj);
        // setUploading(true);
        event.target.value = null;
        setFileName(fileObj.name);

    };
    
    useEffect(() =>{
        console.log('fileName :', fileName);
        console.log('file :', file);

    }, [fileName, file])
    
    
    const handleDrop = (files: File) => {
        setFile(files);
        setFileName(files.name);
    };
    
    const handleClick = (e:Event) => {
        e.preventDefault();
        inputRef.current!.click();
    };
    
    const onSubmit = (e:Event) => {
        e.preventDefault();
        setUploading(true);
        const formData = new FormData();

        formData.append('file', fileName);
        console.log('formData :', formData);
        console.log('fileName :', fileName);
        console.log('file :', file);

        // var options = { content: formData };

        axios.post("http://localhost:4000/api/img-upload", {
            body: file,
            // headers: { "Content-Type": "multipart/form-data"}
            headers: { 
                "Content-Type": "image/jpeg",
                "content-length": `${file?.size}`
                }
        }).then(res =>{
                console.log(res);
            })
    }

    return (
        <div className='card-div'>
            <div className='card-inside'>
                <h2 className='card-inside-title'>Upload your image</h2>
                <span className='card-inside-span-info'>File should be Jpeg, Png,...</span>
                <DragAndDropComponent onDrop={handleDrop}></DragAndDropComponent>
                <span className='card-inside-span-or'>Or</span>
                <div className="mb-2">
                    <form id="form" onSubmit={(e:any) => onSubmit(e)}>
                    <input
                        style={{ display: 'none' }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                        />
                {(fileName !== '') ?
                    <button className="btn btn-primary" type="submit">Upload</button>
                        :
                    <button className='btn btn-primary' onClick={(e:any) => handleClick(e)}>Choose a file</button>}
                    </form> 
                </div>

                {(fileName !== '') ?
                    <>
                        <span className='card-inside-span-info'>File name:</span>
                        <span>{fileName !== '' ? fileName : null}</span>
                    </>
                    : null}
            </div>
        </div>
    );
}