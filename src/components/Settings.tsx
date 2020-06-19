import React, { useState } from 'react'
import notification from '../commons/notification-icon.svg'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'

interface ISettings {
 closeSettingsModal: () => void
}

export const Settings: React.FC<ISettings> = ({ closeSettingsModal }) => {
 const history = useHistory()

 const doLogOut = () => {
  localStorage.removeItem('token')
  closeSettingsModal()
  history.push('/')
  window.location.reload(true)
 }

 return (
  <div className="relative mx-auto h-full opacity-100 z-50 mr-8 ml-8">
   <div className="flex absolute flex bg-options rounded-notification p-6 w-full">
    <div className="text-white text-lg leading-none w-full h-64 min-h-half mb-20">
     <div className="flex justify-end w-inherit">
      <button
       className="text-sm focus:bg-navgray focus:bg-transparent"
       onClick={closeSettingsModal}
      >
       &#10005;
      </button>
     </div>
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
    </div>
   </div>
  </div>
 )
}
