import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doUserRegistration } from '../actions/AuthActions'
import { getUser } from '../selectors/UserSelector'
import { useHistory } from 'react-router'

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
  dispatch(doUserRegistration({ email, password, username }))
  console.log('regis', username, email, password)
 }

 const user = useSelector(getUser)
 if (user) {
  history.push('/upload')
 }

 const token = localStorage.getItem('token')
 useEffect(() => {
  if (token) {
   history.push('/upload')
  }
 }, [])

 const alreadyHasAccount = () => {
  history.push('/login')
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
    <div className="text-white m-5 text-center leading-none tracking-tight">
     SIGN UP{' '}
    </div>
    <div className="ml-4 mr-4">
     <div className="flex items-center mb-3 login-field h-12 ">
      <div className="w-1/3">
       <label className="block text-bg-btn-login ml-5 text-sm leading-none tracking-tight">
        Username
       </label>
      </div>
      <div className="w-2/3 pt-3 pl-5">
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
       <label className="block text-bg-btn-login ml-5 text-sm leading-none tracking-tight">
        Email
       </label>
      </div>
      <div className="w-2/3 pt-3 pl-5">
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
       <label className="block text-bg-btn-login ml-5 text-sm leading-none tracking-tight">
        New Password
       </label>
      </div>
      <div className="w-2/3 pt-3 pl-5">
       <input
        className="w-full login-field placeholder-white text-white text-xs focus:shadow-none  active:login-field  active:shadow-none  shadow-none"
        type="password"
        placeholder="***********"
        value={password}
        onChange={e => setPassword(e.target.value)}
       />
      </div>
     </div>

     <div className="flex items-center mb-3 login-field h-12">
      <div className="w-1/3">
       <label className="block text-bg-btn-login ml-5 text-sm leading-none tracking-tight">
        Confirm Password
       </label>
      </div>
      <div className="w-2/3 pt-3 pl-5">
       <input
        className="w-full login-field placeholder-white text-white text-xs focus:shadow-none active:shadow-none login-field  shadow-none"
        type="password"
        placeholder="***********"
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
