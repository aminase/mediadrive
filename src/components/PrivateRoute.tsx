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
 const userToken = localStorage.getItem('token')

 return (
  <Route
   {...rest}
   component={(props: any) =>
    userToken ? <Component {...props} /> : <Redirect to="/" />
   }
  />
 )
}
