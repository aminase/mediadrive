import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'

interface IPrivateRoute {
 component: any
 path: any
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
 component: Component,
 ...rest
}) => {
 const profile = useSelector(getUser)

 const fakeAuth = {
  isAuthenticated: !profile,
 }

 return (
  <Route
   {...rest}
   component={(props: any) =>
    fakeAuth.isAuthenticated === true ? (
     <Component {...props} />
    ) : (
     <Redirect to="/login" />
    )
   }
  />
 )
}
