import React, { useState, useEffect } from 'react'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus-large.svg'
import add from '../commons/plus-small.svg'
import _ from 'lodash'

export const Invite: React.FC = () => {
 const [invitedUsers, setInvitedUsers] = useState<string[]>([])
 const [newUserEmail, setNewUserEmail] = useState<string>('')

 const handleUserInvite = () => {
  //   inviteUserAction(email)
  setNewUserEmail('')
  setInvitedUsers([...invitedUsers, newUserEmail])
 }

 return (
  <div className="mr-8 ml-8 mt-10">
   <div className="text-white mb-4 ml-4 text-base font-sans-main leading-none tracking-tighter">
    Invite Users
   </div>
   {invitedUsers.map((email: string) => (
    <div>
     <div className="flex items-center mb-2 bg-field text-white">
      <div className="w-2/3 h-12 pl-4 pt-4">
       <div className="font-14">{email}</div>
      </div>
      <div className="border-r h-10 border-profile mt-1 mb-1" />
      <div className="w-1/3">
       <div className="text-white flex inline font-14 p-4 focus:outline-none focus:bg-transparent">
        <img src={sign} className="h-3 pr-3" alt="sent-sign" />
        Sent
       </div>
      </div>
     </div>
    </div>
   ))}
   <div>
    <div className="flex items-center mb-2 bg-field text-white">
     <div className="w-2/3 h-12 pl-4">
      <input
       type="text"
       value={newUserEmail}
       placeholder="Email Address"
       className="font-14 focus:shadow-none active:shadow-none shadow-none"
       onChange={e => setNewUserEmail(e.target.value)}
      />
     </div>
     <div className="border-r h-10 border-profile mt-1 mb-1" />
     <button
      className="w-1/3 text-white flex inline font-14 p-4 focus:bg-options hover:bg-gray-600 focus:outline-none "
      onClick={() => handleUserInvite()}
      disabled={!newUserEmail}
     >
      <img src={add} className="h-3 pr-3 " alt="invite-sign" />
      Invite
     </button>
    </div>
   </div>
  </div>
 )
}
