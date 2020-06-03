import React, { useState } from 'react'
import avatar from '../commons/avatar.svg'

export const Profile: React.FC = () => {
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  return (
    <div className="flex items-center flex-col mt-2 mr-10 ml-10">
      <div className="flex items-center border-solid h-24 min-h-full rounded my-20 mb-5">
        <img src={avatar} className="h-20" />
      </div>
      <form className="w-full max-w-sm mt-2 ">
        <div className="flex items-center bg-field mb-2">
          <div className="w-1/3">
            <label className="block mr-1 flex justify-start ml-3 border-gray-500 border-r-2 text-sm">
              Name
            </label>
          </div>
          <div className="w-2/3 h-12 pl-2">
            <input
              className="w-full py-2 px-4 text-white text-sm focus:shadow-none active:shadow-none border-b-0 shadow-none"
              type="text"
              placeholder="John Doe"
              value={name}
            />
          </div>
        </div>
        <div className="flex items-center bg-field mb-2">
          <div className="w-1/3">
            <label className="block mr-1 flex justify-start ml-3 border-gray-500 border-r-2 text-sm">
              Username
            </label>
          </div>
          <div className="w-2/3 h-12 pl-2">
            <input
              className="py-3  px-4 text-white text-sm focus:shadow-none active:shadow-none border-b-0 shadow-none"
              type="text"
              placeholder="JDmedia"
              value={username}
            />
          </div>
        </div>
        <div className="flex items-center bg-field">
          <div className="w-1/3">
            <label className="block mr-1 flex justify-start ml-3 border-gray-500 border-r-2 text-sm">
              Email
            </label>
          </div>
          <div className="w-2/3 h-12 pl-2">
            <input
              className="w-full justify-start text-white text-sm focus:shadow-none active:shadow-none border-b-0 shadow-none"
              type="text"
              placeholder="john@mediarive"
              value={email}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
