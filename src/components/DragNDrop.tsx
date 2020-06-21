import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import drop from '../commons/drop.svg'

interface IDragNDrop {}

export const DragNDrop: React.FC<IDragNDrop> = () => {
 const [files, setFiles] = useState([])

 const { getRootProps, getInputProps } = useDropzone({
  accept: ['image/*', 'video/*', 'docs/*'],
  onDrop: (acceptedFiles: any) => {
   setFiles(
    acceptedFiles.map((file: any) =>
     Object.assign(file, {
      preview: URL.createObjectURL(file),
     })
    )
   )
  },
 })

 const images = files.map((file: any) => (
  <div key={file}>
   <div>
    <img src={file.preview} className="w-20 h-8" alt="preview" />
   </div>
  </div>
 ))
 console.log(images, 'images')

 return (
  <div className="w-full h-full active:shadow-none">
   {files.length == 0 ? (
    <div {...getRootProps()}>
     <input {...getInputProps()} />
     <img src={drop} className="m-auto mt-20" width="250" alt="drop-file" />
     <p className="center drop-button-color">Drop files here</p>
    </div>
   ) : (
    <div className="flex m-3 row wrap">
     {' '}
     <div className="w-2/5 pt-3 end text-white bg-field pl-4">{images}</div>
     <div className="w-3/5 h-12 pt-3 flex justify-between bg-field">
      <div>-----------</div>
      <div className="pr-4 text-white">60%</div>
     </div>
    </div>
   )}
   <div className="h-full w-full">
    <div {...getRootProps()}>
     <input {...getInputProps()} />
     <p className="center drop-button-color">Drop files here</p>
    </div>
   </div>
  </div>
 )
}
