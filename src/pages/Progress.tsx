import React, { useState } from 'react'
import job from '../commons/job.svg'
import arrow from '../commons/arrow-down.svg'
import right from '../commons/arrow-right.svg'

export const Progress: React.FC = () => {
 const [toggle, setToggle] = useState(true)
 const [toggleFile, setToggleFile] = useState(true)

 const chevronDown = (
  <img src={arrow} className="h-4 mt-1 pr-2" alt="arrow-donw" />
 )
 const chevronRight = (
  <img src={right} className="h-5 pt-1 pr-2" alt="arrow-right" />
 )

 return (
  <div className="bg-field ml-8 mr-8 mt-6 pb-2 mb-4">
   <button
    className="text-white p-4 flex block focus:bg-transparent"
    onClick={() => setToggle(!toggle)}
   >
    <img src={arrow} className="bg-login-field mt-1 mr-2" alt="arrow" />
    <div className="text-sm leading-none mr-2 mt-1">Job 1</div>
    <img src={job} className="h-4 ml-2" alt="job" />
   </button>
   {toggle && (
    <div className="mr-6 ml-6">
     <button
      className="flex  mb-2 w-full bg-options pt-2 pl-2 text-white h-10 focus:bg-update"
      onClick={() => setToggleFile(!toggleFile)}
     >
      {!toggleFile ? chevronRight : chevronDown}
      <div className="bg-white-file text-sm pt-2 font-sans-main leading-none tracking-tighter">
       File_01.mv
      </div>
     </button>
     {toggleFile && (
      <>
       <div className="flex text-white mb-2 bg-field-remove h-12">
        <div className="w-1/3 flex">
         <div className="text-white self-center text-sm pr-1 pl-3 font-sans-main leading-none tracking-tighter">
          {' '}
          To:
         </div>
         <input
          type="text"
          placeholder="mark@mediadrive"
          className="placeholder-white text-sm font-sans-main leading-none tracking-tighter focus:shadow-none shadow-none"
         />
        </div>
        <div className="w-2/3 pt-3">
         <div className="text-right flex justify-around self-center justify-center flex">
          <div className="w-2/4 rounded-sm border-red-00">
           ----------------------
          </div>
          <div className="text-white text-sm">60%</div>
         </div>
        </div>
       </div>
       <div className="flex text-white mb-2 bg-field-remove h-12">
        <div className="w-1/3 flex">
         <div className="text-white self-center text-sm pr-1 pl-3 font-sans-main leading-none tracking-tighter">
          {' '}
          To:
         </div>
         <input
          type="text"
          placeholder="mark@mediadrive"
          className="placeholder-white text-sm font-sans-main leading-none tracking-tighter focus:shadow-none shadow-none"
         />
        </div>
        <div className="w-2/3 pt-3">
         <div className="text-right flex justify-around self-center justify-center flex">
          <div className="w-2/4">--------------------</div>
          <div className="text-white text-sm">60%</div>
         </div>
        </div>
       </div>
      </>
     )}
    </div>
   )}
  </div>
 )
}
