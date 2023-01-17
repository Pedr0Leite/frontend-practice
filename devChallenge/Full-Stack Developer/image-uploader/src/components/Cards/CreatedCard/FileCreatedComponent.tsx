import React, {  useRef, useContext } from 'react';

import * as Styled from './FileCreatedComponent.styled';

import { ImgUploadedStringContext } from '../../../context/ImgUploadedStringContext';



export function FileCreatedComponent(this: any, {...props }) {
    const { imageString, setImageString } = useContext(ImgUploadedStringContext);

    const testImg = ".../../../assets/saved_img/2.png";
    const inputRef = useRef<HTMLInputElement | null>();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputRef.current!.value);
    }

    return(
<div className='card-div'>
            <div className='card-inside'>
                <Styled.FileCreatedSuccessDiv></Styled.FileCreatedSuccessDiv>
                <h2 className='card-inside-title'>Uploaded Successfully!</h2>
                <div className="mb-2">
                <Styled.FileCreatedImgDiv imgUrl={testImg}></Styled.FileCreatedImgDiv>
                </div>
                <Styled.FileCreatedInputButtonDiv>
                <Styled.FileCreatedInput ref={this.inputRef} value={imageString} readOnly={true}></Styled.FileCreatedInput>
                <Styled.FileCreatedButton onClick={copyToClipboard}>Copy Link</Styled.FileCreatedButton>
                </Styled.FileCreatedInputButtonDiv>
            </div>
        </div>
    )
}