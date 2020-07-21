import React, { useState } from 'react'
import job from '../commons/job.svg'
import arrow from '../commons/arrow-down.svg'
import right from '../commons/arrow-right.svg'

export const Progress: React.FC = () => {
 const [toggle, setToggle] = useState(true)
 const [toggleFile, setToggleFile] = useState(true)

 const chevronDown = (
  <img src={arrow} className="h-4 mt-1 pr-1" alt="arrow-donw" />
 )
 const chevronRight = <img src={right} className="h-5 pr-1" alt="arrow-right" />

 return (
  <div className="bg-field ml-8 mr-8 mt-6 pb-2 mb-4">
   <button
    className="text-white p-4 inline-flex focus:bg-transparent"
    onClick={() => setToggle(!toggle)}
   >
    {!toggle ? chevronRight : chevronDown}
    <div className="mt-2 mx-1 inline-flex">
     <div className="font-14">Job 1</div>
     <img src={job} className="h-4 ml-3" alt="job" />
    </div>
   </button>

   {toggle && (
    <div className="mr-6 ml-6">
     <button
      className="flex mb-2 w-full bg-options pt-2 pl-2 text-white h-10 focus:bg-update"
      onClick={() => setToggleFile(!toggleFile)}
     >
      {!toggleFile ? chevronRight : chevronDown}
      <div className="text-white font-14 flex mx-1 self-center">File_01.mv</div>
     </button>
     {toggleFile && (
      <>
       <ProgressBar recipient="mark@mediadrive" percentage="60%" />
       <ProgressBar recipient="mark@mediadrive" percentage="60%" />
      </>
     )}
    </div>
   )}
  </div>
 )
}

const ProgressBar = ({ recipient, percentage }: any) => {
 return (
  <div className="flex text-white mb-2 bg-field-remove h-12 font-14 self-center items-center">
   <div className="w-1/3">
    <div className="inline-flex">
     <div className="pl-3 pr-1">To:</div>
     <div>{recipient}</div>
    </div>
   </div>
   <div className="w-2/3">
    <div className="text-right flex justify-around self-center">
     <div className="w-2/4">--------------------</div>
     <div className="pt-1">{percentage}</div>
    </div>
   </div>
  </div>
 )
}
