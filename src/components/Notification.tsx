import React, { useState } from 'react'
import notification from '../commons/notification-icon.svg'
import { useHistory } from 'react-router'

interface INotification {
 closeModal: () => void
}

const notifications = [
 {
  text: 'Mark has shared a file with you, please accept .',
 },
 {
  text: 'John has shared a file with you, please accept .',
 },
 {
  text: 'Your file has been sent to mark@mediadrive',
 },
]

export const Notification: React.FC<INotification> = ({ closeModal }) => {
 const history = useHistory()

 const [accept, setAccept] = useState('')

 //  const reviewWord = notifications.map(item => item.text).includes('accept ')
 //   ? 'true'
 //   : 'false'
 //  console.log(reviewWord, 'word')

 return (
  <div className="relative mx-auto h-full opacity-100 z-50 mr-8 ml-8">
   <div className="flex absolute flex bg-options rounded-notification p-6 w-full">
    <div className="text-white text-lg leading-none w-full min-h-0 mb-20">
     <div className="flex justify-end w-inherit">
      <button
       className="text-sm focus:bg-navgray focus:bg-transparent"
       onClick={closeModal}
      >
       &#10005;
      </button>
     </div>
     <div className="text-lg text-bold text-center p-2 leading-none tracking-tighter">
      Notification
     </div>
     <div className="border-b-4 border-profile" />
     {notifications.map(message => (
      <>
       <div className="flex block m-6">
        <img src={notification} alt="notification" className="h-4" />
        <p className="ml-2 m-1 text-base leading-none tracking-tighter">
         {message.text}
        </p>
       </div>
       <div className="border-b-2 border-profile" />
      </>
     ))}
    </div>
   </div>
  </div>
 )
}
