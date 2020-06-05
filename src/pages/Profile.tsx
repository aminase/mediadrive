import React, { useState } from 'react'
import avatar from '../commons/profile-avatar.svg'

export const Profile: React.FC = () => {
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  return (
    <div className="flex items-center flex-col mt-2 mr-8 ml-8">
      <div className="flex items-center border-solid min-h-full rounded mt-12 mb-8">
        <img src={avatar} className="h-24" />
      </div>
      <form className="w-full max-w-sm">
        <div className="flex items-center bg-field mb-2">
          <div className="w-1/3">
            <label className="flex text-center ml-3 p-2 mt-1 border-r-2 border-profile text-base">
              Name
            </label>
          </div>
          <div className="w-2/3 h-12 pl-5">
            <input
              className="pt-4 placeholder-white bg-field text-xs focus:shadow-none active:shadow-none border-b-0 shadow-none"
              type="text"
              placeholder="John Doe"
              value={name}
            />
          </div>
        </div>
        <div className="flex items-center bg-field mb-2">
          <div className="w-1/3">
            <label className="flex text-center ml-3 p-2 mt-1 border-r-2 border-profile text-base">
              Username
            </label>
          </div>
          <div className="w-2/3 h-12 pl-5">
            <input
              className="pt-4 placeholder-white bg-field text-xs focus:shadow-none active:shadow-none border-b-0  shadow-none"
              type="text"
              placeholder="JDmedia"
              value={username}
            />
          </div>
        </div>
        <div className="flex items-center bg-field">
          <div className="w-1/3">
            <label className="flex text-center ml-3 p-2 mt-1 border-r-2 border-profile text-base">
              Email
            </label>
          </div>
          <div className="w-2/3 h-12 pl-5">
            <input
              className="pt-4 placeholder-white text-xs focus:shadow-none active:shadow-none shadow-none font-sans-main"
              type="text"
              placeholder="john@mediadrive"
              value={email}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
