import React from 'react'
import { useHistory } from 'react-router'
import { Modal } from './Modal'

interface ISettings {
 openModal: () => void
 closeModal: () => void
}

export const Settings: React.FC<ISettings> = ({ openModal, closeModal }) => {
 const history = useHistory()

 const doLogOut = () => {
  localStorage.removeItem('user')
  closeModal()
  history.push('/')
 }
 return (
  <div>
   <Modal onClick={closeModal}>
    <div className="text-lg text-bold text-center p-2 leading-none tracking-tighter">
     Settings
    </div>
    <div className="border-b-4 border-profile" />
    <button
     className="flex justify-start p-6 text-base leading-none tracking-tighter focus:bg-transparent uppercase"
     onClick={() => doLogOut()}
    >
     {' '}
     Sign out
    </button>
    <div className="border-b-2 border-profile" />
   </Modal>
  </div>
 )
}
