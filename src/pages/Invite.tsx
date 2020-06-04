import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus-sign.svg'

export const Invite: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [emailAdress, setEmailAddress] = useState()

  return (
    <div className="mr-10 ml-10 mt-8">
      <div className="text-white mb-4 ml-4 text-base">Invite Users</div>
      <form>
        <div className="flex items-center mb-2 bg-field text-white text-sm">
          <div className="w-2/3 h-12 border-r-2 text-sm pl-4 text-xs">
            <input
              type="text"
              placeholder="jane@mediadrive"
              className="text-white text-sm bg-field pt-4 pl-4 focus:shadow-none active:shadow-none border-b-0 shadow-none  "
            />
          </div>
          <div className="w-1/3">
            <button className="text-right flex justify-start ml-2 border-gray-500 focus:bg-transparent">
              <img src={sign} className="h-3 ml-2 mt-4" />
              <div className="text-white text-sm p-3">Sent</div>
            </button>
          </div>
        </div>
        <div className="flex items-center mb-2 bg-field text-white text-xs">
          <div className="w-2/3 border-r-2 h-12 text-xs pl-4">
            <input
              type="text"
              placeholder="Email Address"
              className="text-white text-sm bg-field pt-4 pl-4 focus:shadow-none active:shadow-none border-b-0 shadow-none  "
            />
          </div>
          <div className="w-1/3">
            <button className="text-right flex justify-start ml-2 border-gray-500 focus:bg-transparent">
              <img src={plus} className="h-3 ml-2 mt-4" />
              <div className="text-white text-sm p-3">Invite</div>
            </button>
          </div>
        </div>
      </form>
      <button className="mt-3 rounded-full h-8 w-8 flex bg-plus items-center justify-center border-solid border-white focus:outline-none active:bg-gray">
        <img src={plus} className="h-4" />
      </button>
    </div>
  )
}
