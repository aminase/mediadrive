import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doUserRegistration } from '../actions/LoginActions'
import { getUser } from '../selectors/LoginSelector'
import { useHistory } from 'react-router'

export const Registration: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const doRegistration = (e: any) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      dispatch(doUserRegistration({ email, password, username }))
      console.log('regis', username, email, password)
    }
  }

  const credentials = useSelector(getUser)
  if (credentials) {
    history.push('/upload')
  }

  const alreadyHasAccount = () => {
    history.push('/login')
  }

  return (
    <div className="flex justify-center bg-field ml-12 mr-12 mt-6">
      <form className="w-full max-w-sm mt-2">
        <div className="text-white m-5 text-center leading-none tracking-tight">
          SIGN UP{' '}
        </div>
        <div className="ml-4 mr-4">
          <div className="flex items-center mb-3 login-field h-12 ">
            <div className="w-1/3">
              <label className="block text-bg-btn-login ml-5 text-xs leading-none tracking-tight">
                Username
       </label>
            </div>
            <div className="w-2/3 pt-3 pl-2">
              <input
                className="w-full login-field placeholder-white text-white text-xs focus:shadow-none active:shadow-none shadow-none"
                type="text"
                placeholder="damian@mediadrive"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center mb-3 login-field h-12">
            <div className="w-1/3">
              <label className="block text-bg-btn-login ml-5 text-xs leading-none tracking-tight">
                Email
       </label>
            </div>
            <div className="w-2/3 pt-3 pl-2">
              <input
                className="w-full login-field placeholder-white text-white text-xs focus:shadow-none active:shadow-none shadow-none"
                type="text"
                placeholder="damian@mediadrive"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center mb-3 login-field h-12">
            <div className="w-1/3">
              <label className="block text-bg-btn-login ml-5 text-xs leading-none tracking-tight">
                New Password
       </label>
            </div>
            <div className="w-2/3 pt-3 pl-2">
              <input
                className="w-full login-field placeholder-white text-white text-xs focus:shadow-none active:shadow-none shadow-none"
                type="password"
                placeholder="***********"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center mb-3 login-field h-12">
            <div className="w-1/3">
              <label className="block text-bg-btn-login ml-5 text-xs leading-none tracking-tight">
                Confirm Password
       </label>
            </div>
            <div className="w-2/3 pt-3 pl-2">
              <input
                className="w-full login-field placeholder-white text-white text-xs focus:shadow-none active:shadow-none shadow-none"
                type="password"
                placeholder="***********"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="text-center ml-10 mr-10 m-5">
          <button
            className="w-3/4 bg-options focus:outline-none text-white rounded leading-none tracking-tight h-10"
            onClick={e => doRegistration(e)}
          >
            Sign Up
     </button>
          <div
            className="text-white m-5 text-center leading-none tracking-tight cursor-pointer"
            onClick={() => alreadyHasAccount()}
          >
            Already have an account?{' '}
          </div>
        </div>
      </form>
    </div>
  )
}
