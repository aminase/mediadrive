import React, { useEffect } from 'react'
import sign from '../commons/plus-sign.svg'

export const Contacts: React.FC = () => {
  useEffect(() => {
    console.log('name set')
  }, [])

  return (
    <div className="mr-12 ml-12 pt-8">
      <form>
        <div className="flex tems-center mb-2 bg-field">
          <div className="w-2/3 h-12 border-r-2 text-base pl-4 border-b-0">
            <input
              type="text"
              placeholder="mark@mediadrive"
              value=""
              className="w-full py-2 px-4 text-white text-base focus:shadow-none active:shadow-none border-b-0 shadow-none  "
            />
          </div>
          <div className="md:w-1/3">
            <div className=" md:text-right mr-4 flex justify-start ml-6">
              <div className="ml-4 text-white pt-3">Offline</div>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-2 bg-field">
          <div className="w-2/3 border-r-2 h-12 text-base pl-4">
            <input
              type="text"
              placeholder="john@mediadrive"
              className="w-full py-2 px-4 text-white text-base focus:shadow-none active:shadow-none border-b-0 shadow-none  "
            />
          </div>
          <div className="md:w-1/3">
            <div className=" md:text-right mr-4 flex justify-start ml-6 ">
              <div className="ml-4 text-white">Online</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
