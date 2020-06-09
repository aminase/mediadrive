import React, { useState } from 'react'
import notification from '../commons/notification-icon.svg'

export const Notification: React.FC = () => {
 const [isNotification, setIsNotification] = useState(false)
 return (
  <div className="relative w-auto mx-auto h-auto opacity-100 z-50 mr-8 ml-8">
   <div className="absolute pt-4 flex bg-options rounded-lg p-6">
    <div className="text-white text-lg leading-none">
     <div className="flex justify-end">
      {/* <button
       className="text-sm focus:bg-navgray"
       onClick={() => console.log('closed')}
      >
       X
      </button>{' '} */}
     </div>
     <div className="text-lg text-bold text-center justify-center p-2 leading-none tracking-tighter">
      Notification
     </div>
     <div className="border-b-4 border-profile" />
     <div className="flex block m-4">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
     <div className="flex block m-4">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
     <div className="flex block m-5">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept. Mark has shared a file
       with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
     <div className="flex block m-5">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept. Mark has shared a file
       with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
     <div className="flex block m-5">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept. Mark has shared a file
       with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
     <div className="flex block m-5">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept. Mark has shared a file
       with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
     <div className="flex block m-5">
      <img
       src={notification}
       alt="notification"
       className="h-3"
       style={{ transition: 'all .15s ease' }}
      />
      <p className="pl-2 text-sm">
       Mark has shared a file with you, please accept. Mark has shared a file
       with you, please accept.
      </p>
     </div>
     <div className="border-b-2 border-profile" />
    </div>
   </div>
  </div>
 )
}
