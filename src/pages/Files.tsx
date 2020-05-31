import React, { useState } from 'react'

export const Files: React.FC = () => {
  const [files, setFiles] = useState(false)
  const [share, setShare] = useState(false)
  return (
    <div className="mr-12 ml-12  mt-6">
      <div className="md:w-1/3 flex flex-row ml-3">
        <label className="md:w-2/3 block">
          <input
            className="mr-2 bg-checkbox "
            type="checkbox"
            onChange={() => {
              setFiles(true)
              setShare(false)
            }}
          />
          <span className="text-sm text-white">My Files</span>
        </label>

        <label className="md:w-2/3 block">
          <input
            className="mr-1 bg-checkbox active:bg-white-500"
            type="checkbox"
            onChange={() => {
              setShare(true)
              setFiles(false)
            }}
          />
          <span className="text-sm text-white">Shared With Me</span>
        </label>
      </div>
      <div className="flex mb-4 mt-4">
        <div className="w-1/3 bg-field h-12 text-center text-white py-3">
          File_01.mov
        </div>
        <div className="w-1/3 bg-field h-12 text-center text-white py-3">
          {' '}
          12 GB
        </div>
        <button className="w-1/3 bg-field-remove h-12 text-center text-white py-3">
          {' '}
          Remove{' '}
        </button>
      </div>
      {share && (
        <div className="flex mb-4 mt-4">
          <div className="w-1/3 bg-field h-12 text-center text-white py-3">
            File_01.mov
          </div>
          <div className="w-1/3 bg-field h-12 text-center text-white py-3">
            {' '}
            12 GB
          </div>
          <button className="w-1/3 bg-field-remove h-12 text-center text-white py-3">
            {' '}
            Accept{' '}
          </button>
        </div>
      )}
    </div>
  )
}
