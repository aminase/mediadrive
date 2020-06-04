import React, { useState } from 'react'

export const Files: React.FC = () => {
  const [files, setFiles] = useState(false)
  const [share, setShare] = useState(false)
  return (
    <div className="mr-12 ml-12  mt-6">
      <div className="md:w-1/2 flex flex-row">
        <label className="md:w-1/2 block">
          <input
            className="bg-checkbox "
            type="checkbox"
            onChange={() => setFiles(true)}
          />
          <span className="text-sm text-white">My Files</span>
        </label>

        <label className="md:w-1/2 bloc active:bg-checkbox-white ml-12">
          <input
            className="bg-checkbox active:bg-checkbox-white "
            type="checkbox"
            onChange={() => setShare(true)}
          />
          <span className="text-sm text-white">Shared With Me</span>
        </label>
      </div>
      {share && (
        <div className="flex mb-4 mt-4">
          {' '}
          <label className="w-1/3 bg-field h-12 text-center text-white py-3">
            <div className="flex  ml-2 justify-between">
              <input
                className="bg-checkbox active:bg-checkbox-white "
                type="checkbox"
              />
              <span className="w-1/3 bg-field h-12 text-center text-white text-sm">
                {' '}
                File_01.mov
              </span>
            </div>
          </label>
          <div className="w-1/3 bg-field h-12 text-center text-white text-xs pt-4">
            {' '}
            12 GB
          </div>
          <button className="w-1/3 bg-field-remove h-12 text-center text-white text-xs focus:bg-current">
            {' '}
            Accept{' '}
          </button>
        </div>
      )}
      {!files && (
        <div className="flex mb-4 mt-4">
          {' '}
          <label className="w-1/3 bg-field h-12 text-center text-white py-3">
            <div className="flex  ml-2 justify-between">
              <input
                className="bg-checkbox active:bg-checkbox-white "
                type="checkbox"
              />
              <span className="w-1/3 bg-field h-12 text-center text-white text-sm">
                {' '}
                File_01.mov
              </span>
            </div>
          </label>
          <div className="w-1/3 bg-field h-12 text-center text-white text-xs pt-4">
            {' '}
            12 GB
          </div>
          <button className="w-1/3 bg-field-remove h-12 text-center text-white text-xs focus:bg-current">
            {' '}
            Remove{' '}
          </button>
        </div>
      )}
    </div>
  )
}
