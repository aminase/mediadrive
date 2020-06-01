import React, { useState } from 'react'
import avatar from '../commons/avatar.svg'

export const Profile: React.FC = () => {
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  return (
    <div className="flex items-center flex-col mt-2">
      <div className="flex items-center border-solid h-24 min-h-full rounded my-20 mb-5">
        <img src={avatar} height="103" width="103" />
      </div>
      <form className="w-full max-w-sm mt-2 ">
        <div className="md:flex md:items-center mb-2 bg-field mb-2">
          <div className="md:w-1/3">
            <label className=" md:text-right mr-4 flex justify-start ml-6 border-gray-500 border-r-2 text-base">
              Name
            </label>
          </div>
          <div className="md:w-2/3 h-12 focus:shadow-none">
            <input
              className="w-full py-2 px-4 text-white text-base focus:shadow-none active:shadow-none border-b-0 shadow-none  "
              type="text"
              placeholder="John Doe"
              value={name}
            />
          </div>
        </div>
        <div className="flex items-center bg-field mb-2">
          <div className="w-1/3 hadow-none">
            <label className="block text-white-600 mb-1 mr-4 flex justify-start ml-6 border-gray-500 border-r-2 text-base">
              Username
            </label>
          </div>
          <div className="md:w-2/3 h-12">
            <input
              className="w-full py-2 px-4 text-white text-base focus:shadow-none active:shadow-none border-b-0 shadow-none  "
              type="text"
              placeholder="JDmedia"
              value={username}
            />
          </div>
        </div>
        <div className="md:flex md:items-center bg-field ">
          <div className="w-1/3">
            <label className="block text-white-500 text-right mr-4 flex justify-start ml-6 border-gray-500 border-r-2 text-base ">
              Email
            </label>
          </div>
          <div className="w-2/3 h-12">
            <input
              className="w-full py-2 px-4 text-white text-base focus:shadow-none active:shadow-none border-b-0 shadow-none"
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
