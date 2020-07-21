import React, { useState } from 'react'
import sign from '../commons/sent-sign.svg'
// import plus from '../commons/plus-large.svg'
import add from '../commons/plus-small.svg'
import _ from 'lodash'
import { inviteUserAction } from '../actions/UserActions'
import { useDispatch } from 'react-redux'

export const Invite: React.FC = () => {
 const dispatch = useDispatch()
 const [invitedUsers, setInvitedUsers] = useState<string[]>([])
 const [email, setEmail] = useState<string>('')

 const handleUserInvite = () => {
  dispatch(inviteUserAction(email))
  console.log('email', email)
  setInvitedUsers([...invitedUsers, email])
  setEmail('')
 }

 return (
  <div className="mr-8 ml-8 mt-10">
   <div className="text-white mb-4 ml-4 text-base font-sans-main leading-none tracking-tighter">
    Invite Users
   </div>
   {invitedUsers.map((email: any, id: any) => (
    <div key={_.uniqueId('_id')}>
     <div className="flex items-center mb-2 bg-field text-white">
      <div className="w-2/3 h-12 pl-4 pt-4">
       <div className="font-14 text-blue-200">{email}</div>
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
       value={email}
       placeholder="Enter Email Address"
       className="font-14 focus:shadow-none active:shadow-none shadow-none"
       onChange={e => setEmail(e.target.value)}
      />
     </div>
     <div className="border-r h-10 border-profile mt-1 mb-1" />
     <button
      className="w-1/3 text-white flex inline font-14 p-4 focus:bg-options hover:bg-gray-600 focus:outline-none"
      onClick={() => handleUserInvite()}
      disabled={!email}
     >
      <img src={add} className="h-3 pr-3 " alt="invite-sign" />
      Invite
     </button>
    </div>
   </div>
  </div>
 )
}
