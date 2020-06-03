import React, { useState } from 'react'

export const Upload: React.FC = () => {
  const [files, setFiles] = useState([1])
  return (
    <div className="ml-8 mr-8 mt-5 h-10">
      {files.length === 0 ? (
        <div className="text-white">Drag to upload files here</div>
      ) : (
        <div className="flex m-3">
          {' '}
          <div className="w-2/5 pt-3 end text-white bg-field pl-4">
            File_01.mv
          </div>
          <div className="w-3/5 h-12 pt-3 flex justify-between bg-field">
            <div>progress</div>
            <div className="pr-4 text-white">60%</div>
          </div>
        </div>
      )}
    </div>
  )
}
