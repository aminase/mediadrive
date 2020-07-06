import React, { useState, useEffect } from 'react'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus-large.svg'
import add from '../commons/plus-small.svg'
import _ from 'lodash'

export const Invite: React.FC = () => {
 const [newUser, setNewUser] = useState([
  {
   id: '',
   text: ' ',
  },
 ])

 const [email, setEmail] = useState()

 const addInvitee = () => {
  const newInput = {
   id: _.uniqueId('_id'),
   text: '',
  }
  setNewUser(newUser => [...newUser, newInput])
 }

 const handleInputValue = (e: any, text: any) => {
  const userInvite = newUser
  userInvite[text] = e.target.value
  setNewUser([...userInvite])
  console.log(userInvite, 'inivte')
 }

 const handleUserInvite = (e: any) => {
  e.preventDefault()
  const email = e.target.value
  console.log(email, 'mail')
 }

 return (
  <div className="mr-8 ml-8 mt-10">
   <div className="text-white mb-4 ml-4 text-base font-sans-main leading-none tracking-tighter">
    Invite Users
   </div>
   <div className="flex mb-2 bg-field text-white">
    <div className="w-2/3 h-10 pl-4 mt-1">
     <input
      type="text"
      placeholder="jane@mediadrive"
      className="font-14 font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none shadow-none"
     />
    </div>
    <div className="border-r h-10 border-profile mt-1 mb-1" />
    <div className="w-1/3">
     <button
      className="text-white flex inline text-sm p-4 focus:outline-none focus:bg-transparent"
      onClick={() => console.log('sent')}
     >
      <img src={sign} className="h-4 pr-4 pt-1" alt="sent-sign" />
      Sent
     </button>
    </div>
   </div>
   {newUser.map((user, id: any) => (
    <>
     <div className="flex mb-2 bg-field text-white" key={newUser.length}>
      <div className="w-2/3 h-12 pl-4 mt-1">
       <input
        type="text"
        value={email}
        placeholder="Email Address"
        className="font-14 font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none shadow-none"
        onChange={e => handleInputValue(e, email)}
       />
      </div>
      <div className="border-r h-12 border-profile mt-1 mb-1" />
      <div className="w-1/3">
       <button
        className="text-white flex inline text-sm p-4 focus:bg-transparent focus:outline-none"
        onClick={e => handleUserInvite(e)}
       >
        <img src={add} className="h-4 pr-3 pt-1" alt="invite-sign" />
        Invite
       </button>
      </div>
     </div>
    </>
   ))}
   {newUser.length == 0 ? (
    <button> disabled</button>
   ) : (
    <button
     className="mt-4 focus:bg-transparent active:outline-none shadow-none"
     onClick={() => addInvitee()}
    >
     <img src={plus} className="h-8" alt="add-sing" />
    </button>
   )}
  </div>
 )
}
