import React from 'react'

export const Send: React.FC = () => {
  return (
    <div className="mr-12 ml-12  mt-6">
      <div className="md:w-1/3 flex flex-row ml-3">
        <label className="md:w-2/3 block">
          <input className="mr-2 bg-checkbox " type="checkbox" />
          <span className="text-sm text-white">Select Files</span>
        </label>

        <label className="md:w-2/3 block">
          <input
            className="mr-1 bg-checkbox active:bg-white-500"
            type="checkbox"
          />
          <span className="text-sm text-white">Select Contacts</span>
        </label>
      </div>
      <div className="flex mb-4 mt-4">
        {' '}
        <label className="w-1/3 bg-field h-12 text-center text-white py-3">
          <div className="flex  ml-2 justify-between">
            <input className="bg-checkbox " type="checkbox" />
            <span className="w-2/3 bg-field h-12 text-center text-white ">
              {' '}
              File_01.mov
            </span>
          </div>
        </label>
        <div className="w-1/3 bg-field h-12 text-center text-white py-3">
          {' '}
          12 GB
        </div>
        <button className="w-1/3 bg-field-remove h-12 text-center text-white py-3">
          {' '}
          Send{' '}
        </button>
      </div>
      <div className="flex mb-4 mt-4">
        {' '}
        <label className="w-1/3 bg-field h-12 text-center text-white py-3">
          <div className="ml-2 flex justify-between">
            <input className="bg-checkbox " type="checkbox" />
            <span className="w-2/3 bg-field h-12 text-center text-white ">
              {' '}
              File_01.mov
            </span>
          </div>
        </label>
        <div className="w-1/3 bg-field h-12 text-center text-white py-3">
          {' '}
          12 GB
        </div>
        <button className="w-1/3 bg-field-remove h-12 text-center text-white py-3">
          {' '}
          Send{' '}
        </button>
      </div>
    </div>
  )
}
