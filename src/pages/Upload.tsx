import React, { Fragment } from 'react'
import avatar from '../commons/avatar.svg'

export const Upload: React.FC = () => {
  return (
    <div className="ml-12 mr-12 mt-5">
      <div className="flex m-3">
        {' '}
        <div className="w-2/5 bg-gray-800 h-12 pt-3 end pl-20 text-white">
          File_01.mv
        </div>
        <div className="w-3/5 bg-gray-700 h-12 pt-3 flex justify-around">
          <div>progres progress progress</div>
          <div className="pl-48 text-white">60%</div>
        </div>
      </div>
    </div>
  )
}
