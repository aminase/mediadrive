import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { useHistory } from 'react-router'

interface IPrivateRoute {
 component: any
 path: any
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
 component: Component,
 ...rest
}) => {
 const token = localStorage.getItem('token')
 const user = useSelector(getUser)

 return (
  <Route
   {...rest}
   component={(props: any) =>
    token || user ? <Component {...props} /> : <Redirect to="/login" />
   }
  />
 )
}
