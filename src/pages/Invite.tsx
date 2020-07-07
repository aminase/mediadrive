import React, { useState, useEffect } from 'react'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus-large.svg'
import add from '../commons/plus-small.svg'
import _ from 'lodash'

export const Invite: React.FC = () => {
 const [newUser, setNewUser] = useState([{ id: _.uniqueId('_id'), text: '' }])
 const [email, setEmail] = useState('')
 const [sentEmail, setEmailSent] = useState('')

 //  const addInvitee = () => {
 //   const newInput = {
 //    id: _.uniqueId('_id'),
 //    text: '',
 //   }
 //   setNewUser([...newUser, newInput])
 //   if (email === '') {
 //    setNewUser(newUser)
 //   }
 //  }

 const handleUserInvite = () => {
  // inviteUserAction(email);
  setEmailSent(email)
  setEmail('')
 }

 return (
  <div className="mr-8 ml-8 mt-10">
   <div className="text-white mb-4 ml-4 text-base font-sans-main leading-none tracking-tighter">
    Invite Users
   </div>

   {sentEmail && (
    <div className="flex mb-2 bg-field text-white">
     <div className="w-2/3 h-10">
      <div className="font-sans-main font-14 p-5 readonly-color leading-none tracking-tighter text-normal focus:shadow-none active:shadow-none shadow-none">
       {sentEmail}
      </div>
     </div>
     <div className="border-r h-10 border-profile mt-1 mb-1" />
     <div className="w-1/3">
      <div className="text-white flex inline text-sm p-4 focus:outline-none focus:bg-transparent">
       <img src={sign} className="h-4 pr-4 pt-1" alt="sent-sign" />
       Sent
      </div>
     </div>
    </div>
   )}

   {newUser.map((index: any) => (
    <div key={`${index}`}>
     <div className="flex mb-2 bg-field text-white">
      <div className="w-2/3 h-12 pl-4 mt-1">
       <input
        type="text"
        value={email}
        placeholder="Email Address"
        className="font-14 font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none shadow-none"
        onChange={e => setEmail(e.target.value)}
       />
      </div>
      <div className="border-r h-12 border-profile mt-1 mb-1" />
      <div className="w-1/3">
       <button
        className="text-white flex inline text-sm p-4 focus:bg-transparent focus:outline-none"
        onClick={() => handleUserInvite()}
       >
        <img src={add} className="h-4 pr-3 pt-1" alt="invite-sign" />
        Invite
       </button>
      </div>
     </div>
    </div>
   ))}

   {/* <button
    className="mt-4 focus:bg-transparent active:outline-none shadow-none"
    onClick={() => addInvitee()}
   >
    <img src={plus} className="h-8" alt="add-sign" />
   </button> */}
  </div>
 )
}
