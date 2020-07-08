import React, { useEffect } from 'react'
import user from '../commons/user.svg'
import avatar from '../commons/avatar.svg'

export const Contacts: React.FC = () => {
 useEffect(() => {
  console.log('name set')
 }, [])

 return (
  <div className="mr-8 ml-8 pt-8">
   <div className="flex items-center mb-2 bg-field h-12">
    <div className="pr-2 pl-2">
     <img src={user} className="rounded-full h-8" alt="user" />
    </div>
    <div className="w-2/3 h-12">
     <div className="mt-1">
      <input
       type="text"
       placeholder="mark@mediadrive"
       className="placeholder-white font-14 focus:shadow-none active:shadow-none shadow-none"
      />{' '}
     </div>
    </div>
    <div className="border-r h-10 border-profile" />
    <div className="w-1/3">
     <div className="text-right flex block justify-around">
      <div className="rounded-full bg-green-700 h-2 w-2 mt-2 mr-2 ml-3" />
      <div className="mt-2 mr-20 font-14 text-white">Online</div>
     </div>
    </div>
   </div>
   <div className="flex items-center mb-2 bg-field h-12">
    <div className="pr-2 pl-2">
     <img src={avatar} className="rounded-full h-8" alt="avatar" />
    </div>
    <div className="w-2/3 h-12">
     <div className="mt-1">
      <input
       type="text"
       placeholder="john@mediadrive"
       className="placeholder-white font-14 focus:shadow-none active:shadow-none shadow-none  "
      />
     </div>
    </div>{' '}
    <div className="border-r h-10 border-profile " />
    <div className="w-1/3">
     <div className="text-right flex block justify-around">
      <span className="rounded-full bg-red-700 h-2 w-2  mt-2 mr-2 ml-3" />
      <div className="mt-2 mr-20 font-14 text-white">Offline</div>
     </div>
    </div>
   </div>
  </div>
 )
}
