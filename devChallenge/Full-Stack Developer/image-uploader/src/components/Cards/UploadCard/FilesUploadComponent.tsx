import React, { HTMLAttributes, ReactNode, useState, useRef, useContext, useEffect } from 'react';
import { DragAndDropComponent } from '../../DragAndDrop/DragAndDropComponent';
import { UploadingContext } from '../../../context/UploadingContext';
import { ImgUploadedContext } from '../../../context/ImgUploadedContext';
import { ImgUploadedStringContext } from '../../../context/ImgUploadedStringContext';

import axios from 'axios';

export function FileUploadComponent({ ...props }) {
    
    const [file, setFile] = useState<File>();
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>('');

    const { uploading, setUploading } = useContext(UploadingContext);
    const { imageCreated, setImageCreated } = useContext(ImgUploadedContext);
    const { imageString, setImageString } = useContext(ImgUploadedStringContext);
    
    const handleFileChange = (event: any) => {
        const fileObj = event.target.files && event.target.files[0];
        
        if (!fileObj) {
            return;
        }
        setFile(fileObj);
        event.target.value = null;
        setFileName(fileObj.name);
        
    };
    
    
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
        
        if(file){
            const formData = new FormData();
            formData.append('filename', fileName);
            formData.append('formFile', file);
            
            axios.post("http://localhost:4000/api/img-upload", formData, {
            headers: { "Content-Type": "multipart/form-data"}
        }).then(res =>{
                // console.log(res);
                setTimeout(() => {
                    if(res.status === 201){
                        setImageCreated(true);
                        setImageString(res.data!.imgCreated!.imgUploaded);
                        setUploading(false);
                    }
                }, 1500);
            })
        }            
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