import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doUserLogin } from '../actions/AuthActions'
import { useHistory } from 'react-router'
import { getHeapCodeStatistics } from 'v8'
import { getErrorMessage } from '../selectors/UserSelector'
import { ErrorMessage } from './ErrorMessage'

export const Login: React.FC = () => {
 const dispatch = useDispatch()
 const history = useHistory()
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')

 const serverError = useSelector(getErrorMessage)

 const doLogin = (e: any) => {
  e.preventDefault()
  dispatch(
   doUserLogin({ username: `${username}@mediadrive`, password, history })
  )
  console.log(username, password, history, 'login')
 }

 useEffect(() => {
  if (serverError) {
   setError(serverError)
  }
  console.log(serverError, 'serverError')
 }, [])

 const createAccount = () => {
  history.push('/registration')
 }

 return (
  <>
   <div className="flex justify-center bg-field ml-12 mr-12 mt-6">
    <form className="w-full max-w-sm mt-2">
     <div className="text-white m-5 text-center font-14">SIGN IN</div>
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
     </div>
     {serverError.length > 0 && (
      <ErrorMessage errorMessage="Error happend, enter correct email or password" />
     )}

     <div className="text-center ml-10 mr-10 m-5">
      <button
       type="submit"
       className="w-3/4 bg-options font-14 focus:outline-none text-white rounded h-10"
       onClick={e => doLogin(e)}
      >
       Sign In
      </button>
     </div>
     <div
      className="text-white m-5 text-center font-14 cursor-pointer"
      onClick={() => createAccount()}
     >
      Create an account?{' '}
     </div>
    </form>
   </div>
  </>
 )
}
