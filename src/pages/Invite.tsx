import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus-sign.svg'

export const Invite: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [emailAdress, setEmailAddress] = useState()

  return (
    <div className="mr-12 ml-12  mt-6">
      <div className="text-white mb-4 pt-6 text-lg	">Invite Users</div>
      <form>
        <div className="md:flex md:items-center mb-2 bg-field mb-2">
          <div className="w-2/3 h-12 border-r-2 text-base pl-4">
            <input
              type="text"
              placeholder="John Doe"
              className="outline-none"
            />
          </div>
          <div className="md:w-1/3">
            <button className=" md:text-right mr-4 flex justify-start ml-6 border-gray-500 ">
              <img src={sign} height="10" width="20" />
              <div className="ml-4 text-white">Sent</div>
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center mb-2 bg-field mb-2">
          <div className="w-2/3 border-r-2 h-12 text-base  pl-4">
            <input
              type="text"
              placeholder="John Doe"
              className="outline-none"
            />
          </div>
          <div className="md:w-1/3">
            <button className=" md:text-right mr-4 flex justify-start ml-6 border-gray-500 ">
              <img src={plus} height="10" width="15" />
              <div className="ml-4 text-white">Invite</div>
            </button>
          </div>
        </div>
      </form>
      <button className="mt-5 rounded-full h-10 w-10 flex bg-gray-700 items-center justify-center border-solid border-3 border-white-100 focus:outline-none active:bg-gray">
        <img src={plus} height="20" width="20" />
      </button>
    </div>
  )
}
