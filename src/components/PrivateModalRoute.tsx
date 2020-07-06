import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { fetchUser } from '../actions/UserActions'

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
 const dispatch = useDispatch()
 const [isOpenModal, setIsOpenModal] = useState(false)

 let userLocalStorage: any
 const userLocalStorageString = localStorage.getItem('user')
 if (userLocalStorageString) {
  userLocalStorage = JSON.parse(userLocalStorageString)
 }

 const user = useSelector(getUser)

 if (!user && userLocalStorage) {
  dispatch(fetchUser(userLocalStorage.id))
 }

 const openModal = () => setIsOpenModal(true)
 const closeModal = () => setIsOpenModal(false)
 return (
  <Route
   {...rest}
   component={(props: any) =>
    user || userLocalStorage ? (
     <Component closeModal={closeModal} openModal={openModal} {...props} />
    ) : (
     <Redirect to="/" />
    )
   }
  />
 )
}
