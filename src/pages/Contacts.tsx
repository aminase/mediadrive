import React, { useEffect } from 'react'
import user from '../commons/user.svg'

export const Contacts: React.FC = () => {
  useEffect(() => {
    console.log('name set')
  }, [])

  return (
    <div className="mr-8 ml-8 pt-8">
      <div className="flex items-center mb-2 bg-field h-12">
        <div className="pr-2 pl-2">
          <img src={user} className="rounded-full h-8" />
        </div>
        <div className="w-2/3 h-10 bg-field text-base border-r-2">
          <input
            type="text"
            placeholder="mark@mediadrive"
            className="placeholder-white font-sans-main font-xs focus:shadow-none active:shadow-none shadow-none  "
          />
        </div>
        <div className="w-1/3">
          <div className="text-right flex justify-center">
            <div className="p-3 text-white">Offline</div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-2 bg-field h-12">
        <div className="pr-2 pl-2">
          <img src={user} className="rounded-full h-8" />
        </div>
        <div className="w-2/3 bg-field h-12 text-base border-r-2">
          <input
            type="text"
            placeholder="john@mediadrive"
            className="placeholder-white font-sans-main font-xs focus:shadow-none active:shadow-none shadow-none  "
          />
        </div>
        <div className="w-1/3">
          <div className="text-right flex justify-center">
            <div className="p-3 text-white">Online</div>
          </div>
        </div>
      </div>
    </div>
  )
}
