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
        <div className="w-2/3 h-12 border-r-2 border-profile">
          <input
            type="text"
            placeholder="mark@mediadrive"
            className="placeholder-white font-xs focus:shadow-none active:shadow-none shadow-none  "
          />
        </div>
        <div className="w-1/3">
          <div className="text-right flex justify-center">
            <div className="pt-2 text-white">Offline</div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-2 bg-field h-12">
        <div className="pr-2 pl-2">
          <img src={user} className="rounded-full h-8" />
        </div>
        <div className="w-2/3 h-12 border-r-2 border-profile">
          <input
            type="text"
            placeholder="john@mediadrive"
            className="placeholder-white font-xs focus:shadow-none active:shadow-none shadow-none  "
          />
        </div>
        <div className="w-1/3">
          <div className="text-right flex justify-center">
            <div className="pt-2 text-white">Online</div>
          </div>
        </div>
      </div>
    </div>
  )
}
