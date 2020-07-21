import React, { useState } from 'react'
import { useHistory } from 'react-router'

const files = [
 {
  id: 1,
  title: 'File_01.mov',
  size: '12 GB',
 },
 {
  id: 2,
  title: 'File_02.mov',
  size: '12 GB',
 },
]

export const Send: React.FC = () => {
 const history = useHistory()

 const [contacts, setContacts] = useState(false)
 const [isChecked, setIsChecked] = useState(false)

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
      <div className="font-14 text-white pl-2">Select Files</div>
     </div>
     <FileToSend
      title="File_01.mov"
      size="12 GB"
      onChange={console.log('clicked')}
      onClick={() => onButtonNext()}
     >
      Next
     </FileToSend>
    </>
   )}
   {contacts && (
    <>
     <div className="font-14 text-white pl-2">Select Contacts</div>
     <FileToSend
      title="File_01.mov"
      onChange={console.log('clicked')}
      onClick={() => onSendButton()}
     >
      Send
     </FileToSend>
    </>
   )}
  </div>
 )
}

const FileToSend = ({ title, onChange, onClick, children }: any) => {
 return (
  <>
   <div className="flex mb-4 mt-4 h-12">
    {' '}
    <div className="w-full bg-field text-white p-3">
     <div className="flex ml-2 justify-start">
      <input
       className="bg-checkbox active:bg-checkbox-white"
       type="checkbox"
       onChange={onChange}
      />
      <span className="w-2/3 text-white p-2 font-14">{title}</span>
     </div>
    </div>
   </div>
   <div className="flex">
    <div className="w-2/3 bg-gray-400 h-10" />
    <button
     className="w-1/3 bg-options rounded-md text-white text-sm font-sans-main leading-none tracking-tighter focus:bg-update"
     onClick={onClick}
    >
     {children}{' '}
    </button>{' '}
   </div>
  </>
 )
}
