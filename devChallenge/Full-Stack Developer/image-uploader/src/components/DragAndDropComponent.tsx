import React, { HTMLAttributes, ReactNode, useState, useCallback } from 'react';
import { FileUploader } from "react-drag-drop-files";


interface DragAndDropComponentProps {
  onDrop: (files: FileList) => void;
}

export function DragAndDropComponent({onDrop, ...props }: DragAndDropComponentProps) {
  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const onDropHandler = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      const acceptedFiles:any = Array.from(files).filter(
          (file: File) => file.type === 'image/jpeg' || file.type === 'image/png'
          );
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDropHandler}
      className='drag-and-drop'
      >
      Drag and drop JPEG or PNG files here
    </div>
  );
};