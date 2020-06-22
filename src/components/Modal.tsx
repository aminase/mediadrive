import React, { useState } from 'react'

interface IModal {
 onClick: () => void
}

export const Modal: React.FC<IModal> = ({ onClick, children }) => {
 return (
  <div className="relative mx-auto h-full opacity-100 z-50 mr-8 ml-8">
   <div className="flex absolute flex bg-options rounded-notification p-6 w-full overflow-y-auto">
    <div className="text-white text-lg leading-none w-full h-56 min-h-0 mb-20">
     <div className="flex justify-end w-inherit">
      <button
       className="text-sm focus:bg-navgray focus:bg-transparent"
       onClick={onClick}
      >
       &#10005;
      </button>
     </div>
     <div className="text-lg text-bold text-center p-2 leading-none tracking-tighter">
      {children}
     </div>
    </div>
   </div>
  </div>
 )
}
