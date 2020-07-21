import React, { useEffect } from 'react'
import user from '../commons/user.svg'
import avatar from '../commons/avatar.svg'
import { useSelector } from 'react-redux'
import { getIniviteesList } from '../selectors/UserSelector'

export const Contacts: React.FC = () => {
 const invitedUsers = useSelector(getIniviteesList)

 console.log(invitedUsers, 'list of invited users')

 return (
  <div className="mr-8 ml-8 mt-8">
   <Contact email="john@mediadrive">Online</Contact>
   <Contact email="mark@mediadrive">Offline</Contact>
  </div>
 )
}

const Contact = ({ email, children }: any) => {
 return (
  <div className="flex items-center mb-2 bg-field h-12">
   <div className="pr-2 pl-2">
    <img src={user} className="rounded-full h-8" alt="user" />
   </div>
   <div className="w-2/3">
    <div className="text-white font-14">{email}</div>
   </div>
   <div className="border-r h-10 border-profile" />
   <div className="w-1/3">
    <div className="text-right flex block justify-around">
     <div className="rounded-full bg-green-700 h-2 w-2 mt-2 mr-2 ml-3" />
     <div className="m-1 mr-20 text-sm text-white">{children}</div>
    </div>
   </div>
  </div>
 )
}
