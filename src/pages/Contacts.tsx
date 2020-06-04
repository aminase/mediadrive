import React, { useEffect } from 'react'

export const Contacts: React.FC = () => {
  useEffect(() => {
    console.log('name set')
  }, [])

  return (
    <div className="mr-10 ml-10 pt-8">
      <form>
        <div className="flex tems-center mb-2 bg-field h-12">
          <div className="w-2/3 h-12 bg-field text-base pl-4 border-b-0">
            <input
              type="text"
              placeholder="mark@mediadrive"
              className="w-full pt-4 pl-4 text-white bg-field text-base focus:shadow-none active:shadow-none border-b-0 shadow-none"
            />
          </div>
          <div className="w-1/3">
            <div className="text-right flex justify-center">
              <div className="p-3 text-white">Offline</div>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-2 bg-field h-12">
          <div className="w-2/3 bg-field h-12 text-base pl-4">
            <input
              type="text"
              placeholder="john@mediadrive"
              className="w-full pt-4 pl-4 text-white bg-field text-base focus:shadow-none active:shadow-none border-b-0 shadow-none  "
            />
          </div>
          <div className="w-1/3">
            <div className="text-right flex justify-center">
              <div className="p-3 text-white">Online</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
