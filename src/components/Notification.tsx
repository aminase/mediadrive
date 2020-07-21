import React from 'react'
import notification from '../commons/notification-icon.svg'
import { Modal } from '../components/Modal'

interface INotification {
 closeNotificationModal: () => void
}

const notifications = [
 {
  id: 1,
  text: 'Your file has been sent to mark@mediadrive',
 },
 {
  id: 2,
  text: 'Mark has shared a file with you, please accept.',
 },
 { id: 3, text: 'John has shared a file with you, please accept.' },
 {
  id: 4,
  text: 'Your file has been sent to mark@mediadrive',
 },
]

export const Notification: React.FC<INotification> = ({
 closeNotificationModal,
}) => {
 return (
  <div>
   <Modal onClick={closeNotificationModal}>
    <div className="text-lg text-bold text-center p-2 leading-none tracking-tighter">
     Notification
    </div>
    <div className="border-b-4 border-profile" />
    {notifications.map(message => (
     <div key={message.id}>
      <div className="flex block m-6">
       <img src={notification} alt="notification" className="h-4" />
       <p className="ml-2 m-1 text-base leading-none tracking-tighter">
        {message.text}
       </p>
      </div>
      <div className="border-b-2 border-profile" />
     </div>
    ))}
   </Modal>
  </div>
 )
}
