import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import drop from '../commons/drop.svg'

export const DragNDrop: React.FC = () => {
 const [highlighted, setHighlighted] = useState(false)
 const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
  accept: 'image/*,audio/*,video/*, image/png, image/gif',
  multiple: true,
  minSize: 0,
  noClick: true,
  noKeyboard: true,
 })

 console.log(acceptedFiles, 'accfiles')
 return (
  <div className="mt-5 mr-8 ml-8">
   <div
    {...getRootProps()}
    className={`min-h-0 drop-border focus:drop-border ${
     highlighted ? 'bg-navgray' : ''
    }`}
    onDragEnter={() => setHighlighted(true)}
    onDragStart={() => setHighlighted(true)}
    onDragOver={() => setHighlighted(true)}
    onDragEnd={() => setHighlighted(false)}
    onDragOverCapture={() => setHighlighted(true)}
    onDragCapture={() => setHighlighted(true)}
   >
    <input {...getInputProps()} />
    {acceptedFiles.length === 0 ? (
     <>
      <img src={drop} className="m-auto pt-20" width="250" alt="drop-file" />
      <p className="center drop-button-color">Drop files here</p>
     </>
    ) : (
     <>
      {acceptedFiles.map((file: any, index: any) => (
       <div className="overflow-y-auto" key={index}>
        <div className="flex block bg-field h-14 justify-between items-center p-2 mb-2 px-5">
         <div className="w-1/8 text-white text-sm h-12 pt-3">{file.name}</div>
         <div className="w-6/8 text-white">-----------</div>
         <div className="w-1/8 text-white text-sm">60%</div>
        </div>
       </div>
      ))}
     </>
    )}
   </div>
  </div>
 )
}
