import React, { useState } from 'react'
import job from '../commons/jobs-icon.svg'
import { useSelector } from 'react-redux'

export const Progress: React.FC = () => {
  const [toggle, setToggle] = useState(true)
  const [toggleFile, setToggleFile] = useState(false)

  return (
    <div className="bg-field ml-12 mr-12 mt-5 pb-6">
      <button
        className="text-white p-6 flex block focus:bg-transparent"
        onClick={() => setToggle(!toggle)}
      >
        <div className="mr-3 bg-login-field">&#9660;</div>
        <div className="mr-2">Job 1</div>
        <img src={job} className="h-4 m-1" />
      </button>
      {toggle && (
        <>
          <div
            className="flex mr-6 ml-6 mb-2 h-12 login-field"
            onClick={() => setToggleFile(true)}
          >
            <div className="mt-3 ml-8 bg-white">&#9660;</div>
            <div className="w-2/5 pt-3 end text-white pl-4">File_01.mv</div>
          </div>
          <div className="flex tems-center text-white mr-6 ml-6 bg-navgray h-12">
            <div className="text-white ml-8 mt-3"> To:</div>

            <div className="w-2/5 h-12 text-base text-white pl-4 border-b-0">
              <input
                type="text"
                placeholder="mark@mediadrive"
                value=""
                className="w-full py-2 px-4 focus:shadow-none active:shadow-none shadow-none  "
              />
            </div>
            <div className="w-3/5">
              <div className="text-right flex justify-between mt-3">
                <div>----------</div>
                <div className="pr-8 text-white">60%</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
