import React, { useState } from 'react'
import notification from '../commons/notification-icon.svg'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { Modal } from './Modal'

interface ISettings {
 openModal: () => void
 closeModal: () => void
}

export const Settings: React.FC<ISettings> = ({ openModal, closeModal }) => {
 const history = useHistory()

 const doLogOut = () => {
  localStorage.removeItem('token')
  closeModal()
  history.push('/login')
  window.location.reload(true)
 }

 return (
  <div>
   <Modal onClick={closeModal}>
    <div className="text-lg text-bold text-center p-2 leading-none tracking-tighter">
     Settings
    </div>
    <div className="border-b-4 border-profile" />
    <div className="flex block m-6" onClick={() => doLogOut()}>
     <img src={notification} alt="notification" className="h-4" />
     <button className="ml-2 m-1 text-base leading-none tracking-tighter focus:bg-transparent">
      SignOut
     </button>
    </div>
    <div className="border-b-2 border-profile" />
   </Modal>
  </div>
 )
}
