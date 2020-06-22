import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { useHistory } from 'react-router'

interface IPrivateModalRoute {
 component: any
 path: any
 openNotificationModal?: any
}

export const PrivateModalRoute: React.FC<IPrivateModalRoute> = ({
 component: Component,
 openNotificationModal,
 ...rest
}) => {
 const token = localStorage.getItem('token')

 return (
  <Route
   {...rest}
   component={(props: any) =>
    token ? (
     <Component {...props} openNotificationModal={openNotificationModal} />
    ) : (
     <Redirect to="/login" />
    )
   }
  />
 )
}
