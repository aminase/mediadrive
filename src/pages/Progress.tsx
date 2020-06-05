import React, { useState } from 'react'
import job from '../commons/job.svg'
import arrow from '../commons/arrow-down.svg'
import darker from '../commons/darker.svg'

export const Progress: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleFile, setToggleFile] = useState(false)

  return (
    <div className="bg-field ml-8 mr-8 mt-6 pb-2 mb-3">
      <button
        className="text-white p-4 flex block focus:bg-transparent"
        onClick={() => setToggle(!toggle)}
      >
        <img src={arrow} className="bg-login-field mt-1 mr-2" />
        <div className="text-lg leading-none mr-2 mt-1">Job 1</div>
        <img src={job} className="h-5 ml-3" />
      </button>
      {toggle && (
        <div className="mr-6 ml-6">
          <button
            className="flex  mb-2 w-full bg-progress-file pt-2 pl-2 text-white h-10 focus:bg-update"
            onClick={() => setToggleFile(!toggleFile)}
          >
            <img src={darker} className="h-3 mt-1 mr-2 " />
            <div className="bg-white-file font-sans-main font-xs">
              File_01.mv
            </div>
          </button>

          {toggleFile && (
            <>
              <div className="flex justify-start text-white mb-2 bg-field-remove h-10 text-white">
                <div className="text-white justify-start pt-3 ml-3 mr-2 text-base">
                  {' '}
                  To:
                </div>

                <div className="w-3/5 border-b-0 bg-white h-10">
                  <input
                    type="text"
                    placeholder="mark@mediadrive"
                    value=""
                    className="placeholder-white font-sans-main font-xs focus:shadow-none active:shadow-none shadow-none  "
                  />
                </div>
                <div className="w-2/5">
                  <div className="text-right flex justify-between mt-3">
                    <div className="w-1/5">-</div>
                    <div className="pr-8 text-white">60%</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start text-white mb-2 bg-field-remove h-10 text-white">
                <div className="text-white justify-start pt-3 ml-3 mr-2 text-base">
                  {' '}
                  To:
                </div>

                <div className="w-3/5 border-b-0 bg-white h-10">
                  <input
                    type="text"
                    placeholder="mark@mediadrive"
                    value=""
                    className="placeholder-white font-sans-main font-xs focus:shadow-none active:shadow-none shadow-none  "
                  />
                </div>
                <div className="w-2/5">
                  <div className="text-right flex justify-between mt-3">
                    <div className="w-1/5">-</div>
                    <div className="pr-8 text-white">60%</div>
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
