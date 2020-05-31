import React, { useEffect } from 'react'
import sign from '../commons/plus-sign.svg'

export const Contacts: React.FC = () => {
  useEffect(() => {
    console.log('name set')
  }, [])

  return (
    <div className="mr-12 ml-12  pt-8">
      <form>
        <div className="md:flex md:items-center mb-2 bg-field  mb-2">
          <div className="w-2/3 h-12 border-r-2 text-base  pl-4">
            <input type="text" placeholder="mark@mediadrive" />
          </div>
          <div className="md:w-1/3">
            <button className=" md:text-right mr-4 flex justify-start ml-6 border-gray-500 ">
              <div className="ml-4 text-white">Offline</div>
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center mb-2 bg-field  mb-2">
          <div className="w-2/3 border-r-2 h-12 text-base  pl-4">
            <input type="text" placeholder="john@mediadrive" />
          </div>
          <div className="md:w-1/3">
            <button className=" md:text-right mr-4 flex justify-start ml-6 border-gray-400 ">
              <div className="ml-4 text-white">Online</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
