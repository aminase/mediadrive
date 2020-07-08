import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { doUserRegistration } from '../actions/AuthActions'
import { useHistory } from 'react-router'
import { getError } from '../selectors/UserSelector'

export const Registration: React.FC = () => {
 const dispatch = useDispatch()
 const history = useHistory()

 const [username, setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')
 const [errorMessage, setErrorMessage] = useState('')

 const doRegistration = (e: any) => {
  e.preventDefault()
  dispatch(
   doUserRegistration({
    username: `${username}@mediadrive `,
    email,
    password,
    history,
   })
  )
 }

 console.log(username, 'username')

 const alreadyHasAccount = () => {
  history.push('/')
 }

 useEffect(() => {
  if (
   password !== '' &&
   confirmPassword !== '' &&
   password !== confirmPassword
  ) {
   setErrorMessage("Password don't match")
  } else {
   setErrorMessage('')
  }
 }, [password, confirmPassword])

 return (
  <div className="flex justify-center bg-field ml-12 mr-12 mt-6">
   <form className="w-full max-w-sm mt-2">
    <div className="text-white m-5 text-center font-14">SIGN UP </div>
    <div className="ml-4 mr-4">
     <div className="flex items-center mb-3 login-field h-12 p-2">
      <div className="w-1/3">
       <label className="block text-bg-btn-login pl-2 font-14">Username</label>
      </div>
      <div className="w-2/3 items-center inline-flex">
       <input
        autoFocus
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none "
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
       />
       <div className="extension-color font-14 pr-10">@mediadrive</div>
      </div>
     </div>
     <div className="flex items-center mb-3 login-field h-12 p-2">
      <div className="w-1/3">
       <label className="block text-bg-btn-login pl-2 font-14">Email</label>
      </div>
      <div className="w-2/3">
       <input
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none "
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
       />
      </div>
     </div>
     <div className="flex items-center mb-3 login-field h-12 p-2">
      <div className="w-1/3">
       <label className="block text-bg-btn-login pl-2 font-14">Password</label>
      </div>
      <div className="w-2/3">
       <input
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none "
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
       />
      </div>
     </div>
     <div className="flex items-center mb-3 login-field h-12 p-2">
      <div className="w-1/3">
       <label className="block text-bg-btn-login pl-2 font-14">
        Confirm Password
       </label>
      </div>
      <div className="w-2/3 pl-4">
       <input
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none "
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
       />
      </div>
     </div>
    </div>
    {errorMessage !== '' && (
     <div
      className="bg-red-100 text-red-700 px-4 py-3 rounded relative"
      role="alert"
     >
      <strong className="font-bold">Passwords do not match!</strong>
     </div>
    )}
    <div className="text-center ml-10 mr-10 m-5">
     <button
      className="w-3/4 bg-options font-14 focus:outline-none text-white rounded h-10"
      onClick={e => doRegistration(e)}
     >
      Sign Up
     </button>
     <div
      className="text-white m-5 text-center font-14 cursor-pointer"
      onClick={() => alreadyHasAccount()}
     >
      Already have an account?{' '}
     </div>
    </div>
   </form>
  </div>
 )
}
