import React, { useState } from 'react'

interface IErrorMessage {
 errorMessage: any
}

export const ErrorMessage: React.FC<IErrorMessage> = ({ errorMessage }) => {
 return (
  <div>
   <div
    className="bg-red-100 text-red-700 px-5 pt-1 rounded relative"
    role="alert"
   >
    <strong className="block sm:inline font-bold text-sm">
     {errorMessage}
    </strong>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg
      className="fill-current h-6 w-6 text-red-500"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
     ></svg>
    </span>
   </div>
  </div>
 )
}
