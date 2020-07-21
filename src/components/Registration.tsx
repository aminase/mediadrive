import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doUserRegistration, setAuthError } from '../actions/AuthActions'
import { useHistory } from 'react-router'
import { getErrorMessage, getUser } from '../selectors/UserSelector'
import { ErrorMessage } from '../components/ErrorMessage'
import exposed from '../commons/eye-open.svg'
import hidden from '../commons/eye-closed.svg'

export const Registration: React.FC = () => {
 const dispatch = useDispatch()
 const history = useHistory()
 const [username, setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')
 const [errorMessage, setErrorMessage] = useState('')
 const [isPasswordVisible, setIsPasswordVisible] = useState(false)
 const [passwordLengthError, setPasswordLengthError] = useState('')
 const serverMessage = useSelector(getErrorMessage)

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
 const alreadyHasAccount = () => {
  history.push('/')
 }

 useEffect(() => {
  {
   password !== '' && confirmPassword !== '' && password !== confirmPassword
    ? setErrorMessage("Passwords don't match")
    : setErrorMessage('')
  }
  {
   password.length <= 5 && password !== confirmPassword
    ? setPasswordLengthError('Password must be at least 6 characters long')
    : setPasswordLengthError('')
  }
 }, [password, confirmPassword])

 const togglePasswordVisability = (e: any) => {
  e.preventDefault()
  setIsPasswordVisible(!isPasswordVisible ? true : false)
 }

 useEffect(() => {
  dispatch(setAuthError(undefined))
 }, [username, email, password, confirmPassword])

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
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none"
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
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none p-2"
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
      <div className="w-2/3 items-center inline-flex">
       <input
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none "
        type={isPasswordVisible ? 'text' : 'password'}
        value={password}
        onChange={e => setPassword(e.target.value)}
       />
       <button
        onClick={togglePasswordVisability}
        className="pr-5 focus:outline-none focus:bg-transparent"
       >
        {!isPasswordVisible ? (
         <img src={exposed} alt="eye-opened" className="h-4" />
        ) : (
         <img src={hidden} alt="eye-closed" className="h-2" />
        )}
       </button>
      </div>
     </div>
     <div className="flex items-center mb-3 login-field h-12 p-2">
      <div className="w-2/4">
       <label className="block text-bg-btn-login pl-2 font-14">
        Confirm Password
       </label>
      </div>
      <div className="w-2/3 items-center inline-flex">
       <input
        className="w-full text-white font-14 focus:shadow-none active:shadow-none shadow-none "
        type={isPasswordVisible ? 'text' : 'password'}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
       />
       <button
        onClick={togglePasswordVisability}
        className="pr-5 focus:outline-none focus:bg-transparent"
       >
        {!isPasswordVisible ? (
         <img src={exposed} alt="eye-opened" className="h-4" />
        ) : (
         <img src={hidden} alt="eye-closed" className="h-2" />
        )}
       </button>
      </div>
     </div>
     {errorMessage && <ErrorMessage errorMessage="Passwords don't match" />}

     {serverMessage.error && (
      <ErrorMessage errorMessage="Username or email already exists or invalid email format" />
     )}
     {passwordLengthError.length !== 0 && (
      <ErrorMessage errorMessage="Password must be at least 6 characters long" />
     )}
    </div>
    <div className="text-center ml-10 mr-10 m-5">
     <button
      className="w-3/4 bg-options font-14 focus:outline-none text-white rounded h-10"
      onClick={e => doRegistration(e)}
      disabled={!(username && password && password && confirmPassword)}
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
