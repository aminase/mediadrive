import React, { useState } from 'react'
import avatar from '../commons/avatar.svg'

export const Upload: React.FC = () => {
  const [files, setFiles] = useState([1])
  return (
    <div className="ml-12 mr-12 mt-5">
      {files.length === 0 ? (
        <div className="text-white">Drag to upload files here</div>
      ) : (
        <div className="flex m-3">
          {' '}
          <div className="w-2/5 h-12 pt-3 end pl-20 text-white bg-field">
            File_01.mv
          </div>
          <div className="w-3/5 h-12 pt-3 flex justify-around bg-field">
            <div>progres progress progress</div>
            <div className="pl-48 text-white">60%</div>
          </div>
        </div>
      )}
    </div>
  )
}
