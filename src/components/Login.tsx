import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doUserLogin } from '../actions/AuthActions'
import { getUser } from '../selectors/UserSelector'
import { useHistory } from 'react-router'

export const Login: React.FC = () => {
 const dispatch = useDispatch()
 const history = useHistory()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [errorMessage, setErrorMessage] = useState('')

 const doLogin = (e: any) => {
  e.preventDefault()
  dispatch(doUserLogin({ email, password }))
  history.push('/upload')
 }

 //  useEffect(() => {
 //   history.push('/upload')
 //  }, [])

 //  const user = useSelector(getUser)
 //  const token = localStorage.getItem('user')
 //  console.log(user, 'local storage')

 //  useEffect(() => {
 //   if (user || token) {
 //    history.push('/upload')
 //   }
 //  }, [])

 const createAccount = () => {
  history.push('/registration')
 }

 return (
  <div className="flex justify-center bg-field ml-12 mr-12 mt-6">
   <form className="w-full max-w-sm mt-2">
    <div className="text-white m-5 text-center leading-none tracking-tight">
     SIGN IN{' '}
    </div>
    <div className="ml-4 mr-4">
     <div className="flex items-center mb-3 login-field h-12">
      <div className="w-1/3">
       <label className="block text-bg-btn-login ml-5 text-sm leading-none tracking-tight">
        Email
       </label>
      </div>
      <div className="w-2/3 pt-3">
       <input
        className="w-full login-field placeholder-white text-white text-sm focus:shadow-none active:shadow-none shadow-none"
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
        Password
       </label>
      </div>
      <div className="w-2/3 pt-3">
       <input
        className="w-full login-field placeholder-white text-white text-sm focus:shadow-none active:shadow-none shadow-none"
        type="password"
        placeholder="***********"
        value={password}
        onChange={e => setPassword(e.target.value)}
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
      type="submit"
      className="w-3/4 bg-options focus:outline-none text-white rounded leading-none tracking-tight h-10"
      onClick={e => doLogin(e)}
     >
      Sign In
     </button>
    </div>
    <div
     className="text-white m-5 text-center leading-none tracking-tight cursor-pointer"
     onClick={() => createAccount()}
    >
     Create an account?{' '}
    </div>
   </form>
  </div>
 )
}
