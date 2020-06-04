import React from 'react'

export const Send: React.FC = () => {
  return (
    <div className="mr-12 ml-12  mt-6">
      <div className="md:w-1/3 flex flex-row">
        <label className="md:w-2/3 block">
          <input className="bg-checkbox " type="checkbox" />
          <span className="text-sm text-white pl-2">Select Files</span>
        </label>

        <label className="md:w-2/3 block active:bg-checkbox-white ml-12">
          <input
            className="g-checkbox active:bg-checkbox-white "
            type="checkbox"
          />
          <span className="text-sm text-white pl-2">Select Contacts</span>
        </label>
      </div>
      <div className="flex mb-4 mt-4">
        {' '}
        <label className="w-1/3 bg-field h-12 text-center text-white py-3">
          <div className="flex  ml-2 justify-between">
            <input
              className="bg-checkbox active:bg-checkbox-white "
              type="checkbox"
            />
            <span className="w-1/3 h-12 text-center text-white text-sm">
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
          Send{' '}
        </button>
      </div>
      <div className="flex mb-4 mt-4">
        {' '}
        <label className="w-1/3 bg-field h-12 text-center text-white py-3">
          <div className="ml-2 flex justify-between">
            <input className="bg-checkbox " type="checkbox" />
            <span className="w-1/3 h-12 text-center text-white text-sm ">
              {' '}
              File_01.mov
            </span>
          </div>
        </label>
        <div className="w-1/3 bg-field h-12 text-center text-white pt-4 text-xs ">
          {' '}
          12 GB
        </div>
        <button className="w-1/3 bg-field-remove h-12 text-center text-white py-3 text-xs focus:bg-current">
          {' '}
          Send{' '}
        </button>
      </div>
    </div>
  )
}
