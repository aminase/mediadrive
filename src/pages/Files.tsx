import React, { useState } from 'react'

export const Files: React.FC = () => {
 const [files, setFiles] = useState(false)
 const [share, setShare] = useState(false)

 return (
  <div className="mr-8 ml-8  mt-6">
   <div className="md:w-1/2 flex flex-row">
    <label className="md:w-1/2 block">
     <input
      className="bg-checkbox "
      type="checkbox"
      onChange={() => setFiles(true)}
     />
     <span className="text-sm text-white pl-2">My Files</span>
    </label>

    <label className="md:w-1/2 block ml-12">
     <input
      className="bg-checkbox"
      type="checkbox"
      onChange={() => setShare(true)}
     />
     <span className="text-sm text-white pl-2">Shared With Me</span>
    </label>
   </div>
   {share && (
    <File fileName="File_01.mov" size="12 GB">
     Accept
    </File>
   )}
   {!files && (
    <File fileName="File_01.mov" size="12 GB">
     Remove
    </File>
   )}
  </div>
 )
}

const File = ({ fileName, size, onClick, children }: any) => {
 return (
  <div className="flex mt-2 h-12">
   {' '}
   <div className="w-1/3 bg-field text-center start text-white text-sm pt-4">
    {' '}
    {fileName}{' '}
   </div>
   <div className="w-1/3 bg-field text-center text-white text-xs pt-4">
    {' '}
    {size}{' '}
   </div>
   <button
    className="w-1/3 bg-field-remove text-center text-white text-xs focus:bg-current"
    onClick={onClick}
   >
    {' '}
    {children}{' '}
   </button>
  </div>
 )
}
