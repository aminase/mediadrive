import React, { useState } from 'react'
import { useHistory } from 'react-router'

export const Send: React.FC = () => {
  const history = useHistory()

  const [contacts, setContacts] = useState(false)

  const onButtonNext = () => {
    setContacts(true)
  }

  const onSendButton = () => {
    history.push('/progress')
  }

  return (
    <div className="mr-8 ml-8  mt-6">
      {!contacts && (
        <>
          <div className="md:w-1/3 flex flex-row">
            <div className="text-sm text-white pl-2">Select Files</div>
          </div>
          <div className="flex mb-4 mt-4 h-12">
            {' '}
            <label className="w-2/3 bg-field text-center text-white py-3">
              <div className="flex  ml-2 justify-between">
                <input
                  className="bg-checkbox active:bg-checkbox-white "
                  type="checkbox"
                />
                <span className="w-1/3 text-center text-white text-xs">
                  {' '}
                  File_01.mov
                </span>
              </div>
            </label>
            <div className="w-1/3 bg-field-remove h-12 pt-4 text-center text-white text-xs focus:bg-current">
              {' '}
              12 GB{' '}
            </div>
          </div>
          <div className="flex mb-4 mt-4 h-12">
            {' '}
            <label className="w-2/3 bg-field text-center text-white py-3">
              <div className="flex  ml-2 justify-between">
                <input
                  className="bg-checkbox active:bg-checkbox-white "
                  type="checkbox"
                />
                <span className="w-1/3 text-center text-white text-xs">
                  {' '}
                  File_01.mov
                </span>
              </div>
            </label>
            <div className="w-1/3 bg-field-remove h-12 pt-4 text-center text-white text-xs focus:bg-current">
              {' '}
              12 GB{' '}
            </div>
          </div>
          <div className="flex mt-8">
            <div className="w-2/3 bg-gray-400 h-12" />
            <button
              className="w-1/3 h-10 text-center bg-options rounded-md text-white text-sm font-sans-main leading-none tracking-tighter focus:bg-update"
              onClick={() => onButtonNext()}
            >
              Next
            </button>{' '}
          </div>
        </>
      )}
      {contacts && (
        <>
          <div className="text-sm text-white pl-2">Select Contacts</div>
          <div className="flex mb-4 mt-4 h-12 bg-field">
            {' '}
            <label className="w-2/3 bg-field text-center text-white py-3">
              <div className="flex  ml-2 justify-between">
                <input
                  className="bg-checkbox active:bg-checkbox-white "
                  type="checkbox"
                  placeholder="mark@mediadrive"
                />
                <span className="w-1/3 text-center text-white text-xs">
                  {' '}
                  File_01.mov
                </span>
              </div>
            </label>
            <div className="w-1/3" />
          </div>
          <div className="flex mt-5">
            <div className="w-2/3 bg-gray-400 h-12" />
            <button
              className="w-1/3 h-10 text-center bg-options rounded-md text-white text-sm font-sans-main leading-none tracking-tighter focus:bg-update"
              onClick={() => onSendButton()}
            >
              Send
            </button>{' '}
          </div>
        </>
      )}
    </div>
  )
}
