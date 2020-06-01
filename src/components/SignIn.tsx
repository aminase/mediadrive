import React, { useState } from 'react'

export const SignIn: React.FC = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  return (
    <div className=" md:flex justify-center bg-field  ml-24 mr-24 mt-5">
      <form className="w-full max-w-sm mt-2">
        <div className="text-white p-6 text-center">SIGN IN </div>

        <div className="md:flex md:items-center mb-5 login-field h-12 ">
          <div className="md:w-1/3">
            <label className="block text-bg-btn-login ml-5 text-base">
              Username
            </label>
          </div>
          <div className="w-2/3 pt-3">
            <input
              className="w-full text-white text-base focus:shadow-none active:shadow-none shadow-none  "
              type="text"
              placeholder="damian@mediadrive"
              value={username}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 login-field h-12">
          <div className="md:w-1/3">
            <label className="block text-bg-btn-login ml-5 text-base">
              Password
            </label>
          </div>
          <div className="md:w-2/3 h-12">
            <input
              className="w-full text-white text-base focus:shadow-none active:shadow-none shadow-none  "
              type="text"
              placeholder="***********"
              value={password}
            />
          </div>
        </div>
        <div className="m-5 text-center">
          <button
            className="bg-options focus:outline-none text-white py-2 px-4 rounded w-3/4 ml-12 mr-20"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}
