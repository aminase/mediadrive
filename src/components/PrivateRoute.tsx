import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { fetchUserAction } from '../actions/UserActions'

interface IPrivateRoute {
 component: any
 path: any
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
 component: Component,
 ...rest
}) => {
 const dispatch = useDispatch()

 let userLocalStorage: any
 const userLocalStorageString = localStorage.getItem('user')
 if (userLocalStorageString) {
  userLocalStorage = JSON.parse(userLocalStorageString)
 }

 const user = useSelector(getUser)

 if (!user && userLocalStorage) {
  dispatch(fetchUserAction(userLocalStorage.id))
 }

 return (
  <Route
   {...rest}
   component={(props: any) =>
    userLocalStorage ? <Component {...props} /> : <Redirect to="/" />
   }
  />
 )
}
