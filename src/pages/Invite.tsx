import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus.svg'
import add from '../commons/plus-sm.svg'

export const Invite: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [emailAdress, setEmailAddress] = useState()

  return (
    <div className="mr-8 ml-8 mt-10">
      <div className="text-white mb-4 ml-4 text-lg">Invite Users</div>
      <form>
        <div className="flex items-center mb-2 bg-field text-white text-sm">
          <div className="w-2/3 h-12 pl-4">
            <input
              type="text"
              placeholder="jane@mediadrive"
              className="flex ml-3 p-2 mt-1 border-r-2 border-profile text-sm focus:shadow-none active:shadow-none shadow-none "
            />
          </div>
          <div className="w-1/3">
            <button className="text-right flex justify-start ml-2 border-gray-500 focus:bg-transparent">
              <img src={sign} className="h-3 ml-2 mt-4" />
              <div className="text-white text-sm p-3">Sent</div>
            </button>
          </div>
        </div>
        <div className="flex items-center mb-2 bg-field text-white">
          <div className="w-2/3 h-12 pl-4">
            <input
              type="text"
              placeholder="Email Address"
              className="flex ml-3 p-2 mt-1 border-r-2 border-profile text-sm focus:shadow-none active:shadow-none shadow-none"
            />
          </div>
          <div className="w-1/3">
            <button className="text-right flex justify-start ml-2 border-gray-500 focus:bg-transparent">
              <img src={add} className="h-3 ml-2 mt-4" />
              <div className="text-white text-sm p-3">Invite</div>
            </button>
          </div>
        </div>
      </form>
      <button className="mt-4 focus:outline-none active:outline-none">
        <img src={plus} className="h-10" />
      </button>
    </div>
  )
}
