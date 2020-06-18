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
     <span className="text-xs text-white pl-2">My Files</span>
    </label>

    <label className="md:w-1/2 block ml-12">
     <input
      className="bg-checkbox"
      type="checkbox"
      onChange={() => setShare(true)}
     />
     <span className="text-xs text-white pl-2">Shared With Me</span>
    </label>
   </div>
   {share && (
    <div className="flex mt-3 h-12">
     {' '}
     <div className="w-1/3 bg-field text-center start text-white text-sm pt-4">
      {' '}
      File_01.mov
     </div>
     <div className="w-1/3 bg-field text-center text-white text-xs pt-4">
      {' '}
      12 GB
     </div>
     <button className="w-1/3 bg-field-remove text-center text-white text-xs focus:bg-current">
      {' '}
      Accept{' '}
     </button>
    </div>
   )}
   {!files && (
    <div className="flex mt-2 h-12">
     {' '}
     <div className="w-1/3 bg-field text-center start text-white text-sm pt-4">
      {' '}
      File_01.mov
     </div>
     <div className="w-1/3 bg-field text-center text-white text-xs pt-4">
      {' '}
      12 GB
     </div>
     <button className="w-1/3 bg-field-remove text-center text-white text-xs focus:bg-current">
      {' '}
      Remove{' '}
     </button>
    </div>
   )}
  </div>
 )
}
