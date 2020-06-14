import React, { useState } from 'react'
import avatar from '../commons/profile-avatar.svg'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/LoginSelector'
import IUserRegistrationData from '../types/UserRegistrationData'

export const Profile: React.FC = () => {
 const userData = useSelector(getUser)
 if (!userData) {
 }
 const [name, setName] = useState('')
 const [email, setEmail] = useState(userData?.email)
 const [username, setUsername] = useState('')

 console.log(userData, 'userList')

 return (
  <div className="flex items-center flex-col mt-2 mr-8 ml-8">
   <div className="flex items-center border-solid min-h-full rounded mt-12 mb-8">
    <img src={avatar} className="h-24" />
   </div>
   <div className="w-full max-w-sm">
    <div className="flex items-center bg-field mb-2">
     <div className="w-1/3 border-r border-profile">
      <label className="flex text-center ml-3 p-2 mt-1 text-base font-sans-main leading-none tracking-tighter">
       Name
      </label>
     </div>
     <div className="w-2/3 h-12 pl-5">
      <input
       className="pt-4 placeholder-white bg-field text-xs font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none border-b-0 shadow-none"
       placeholder="John Doe"
       value={name}
      />
     </div>
    </div>
    <>
     <div className="flex items-center bg-field mb-2">
      <div className="w-1/3 border-r border-profile">
       <label className="flex text-center ml-3 p-2 mt-1 text-base font-sans-main leading-none tracking-tighter">
        Username
       </label>
      </div>
      <div className="w-2/3 h-12 pl-5">
       <input
        className="pt-4 placeholder-white bg-field text-xs font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none border-b-0  shadow-none"
        placeholder="JDmedia"
        value={username}
       />
      </div>
     </div>
     <div className="flex items-center bg-field">
      <div className="w-1/3">
       <label className="flex text-center ml-3 p-2 mt-1 border-r-2 border-profile text-base font-sans-main leading-none tracking-tighter">
        Email
       </label>
      </div>
      <div className="w-2/3 h-12 pl-5">
       <input
        className="pt-4 placeholder-white text-xs font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none shadow-none font-sans-main"
        placeholder="john@mediadrive"
        value={email}
       />
      </div>
     </div>
    </>
    ) )}
   </div>
  </div>
 )
}
