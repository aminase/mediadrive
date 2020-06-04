import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doSignUpUser } from '../actions/LoginActions'
import { getUser } from '../selectors/LoginSelector'
import { useHistory } from 'react-router'

export const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [loginUsername, setLoginUsername] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // const user = useSelector(getUser)
  // if (user) {
  //   history.push('/')
  // }

  const onSignUp = () => {
    dispatch(doSignUpUser)
    console.log('let')
  }

  return (
    <div className="flex justify-center bg-field ml-10 mr-10 mt-5">
      <form className="w-full max-w-sm mt-2">
        <div className="text-white p-6 text-center">SIGN UP </div>

        <div className="flex items-center mb-5 login-field h-12 ">
          <div className="w-1/3">
            <label className="block text-bg-btn-login ml-5 text-base">
              Username
            </label>
          </div>
          <div className="w-2/3 pt-2">
            <input
              className="w-full login-field text-white text-base focus:shadow-none active:shadow-none shadow-none  "
              type="text"
              placeholder="damian@mediadrive"
              value={loginUsername}
              onChange={e => setLoginUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-5 login-field h-12 ">
          <div className="w-1/3 text-bg-btn-login ">
            <label className="block text-bg-btn-login ml-5 text-base">
              Email
            </label>
          </div>
          <div className="w-2/3 pt-3">
            <input
              className="w-full login-field text-white text-base focus:shadow-none active:shadow-none shadow-none  "
              type="text"
              placeholder="damian@mediadrive"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6 login-field h-12">
          <div className="w-1/3 pt-3">
            <label className="block text-bg-btn-login ml-5 text-base">
              Password
            </label>
          </div>
          <div className="w-2/3 pt-3">
            <input
              className="w-full login-field text-white text-base focus:shadow-none active:shadow-none shadow-none  "
              type="text"
              placeholder="***********"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="m-5 text-center">
          <button
            className="bg-options focus:outline-none text-white py-2 px-4 rounded w-3/4 ml-12 mr-20"
            type="button"
            onClick={() => onSignUp()}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
