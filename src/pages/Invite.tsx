import React, { useState } from 'react'
import sign from '../commons/sent-sign.svg'
import plus from '../commons/plus-large.svg'
import add from '../commons/plus-small.svg'
import { useHistory } from 'react-router'

export const Invite: React.FC = () => {
 const history = useHistory()
 const [noteList, setNoteList] = useState([
  {
   id: 0,
   text: '',
   isNew: false,
  },
 ])

 const addNote = () => {
  if (noteList.length !== 0) {
   const editedNoteList = noteList
   editedNoteList[editedNoteList.length - 1].isNew = false
   setNoteList([...editedNoteList])
  }
  setNoteList([...noteList, { id: noteList.length, text: '', isNew: true }])
 }

 return (
  <div className="mr-8 ml-8 mt-10">
   <div className="text-white mb-4 ml-4 text-base font-sans-main leading-none tracking-tighter">
    Invite Users
   </div>
   <div className="flex mb-2 bg-field text-white">
    <div className="w-2/3 h-10 p-3 mt-1">
     <input
      type="text"
      placeholder="jane@mediadrive"
      className="text-xs font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none shadow-none"
     />
    </div>
    <div className="border-r h-10 border-profile mt-1 mb-1" />
    <div className="w-1/3">
     <button
      className="text-white flex inline text-sm p-4 focus:outline-none focus:bg-transparent"
      onClick={() => console.log('sent')}
     >
      <img src={sign} className="h-4 pr-4 pt-1" alt="sent-sign" />
      Sent
     </button>
    </div>
   </div>
   {noteList.map(note => (
    <>
     <div className="flex mb-2 bg-field text-white">
      <div className="w-2/3 h-12 pl-4 mt-1">
       <input
        type="text"
        placeholder="Email Address"
        key={note.id}
        value={note.text}
        className="text-xs font-sans-main leading-none tracking-tighter focus:shadow-none active:shadow-none shadow-none"
        onChange={() => setNoteList}
       />
      </div>
      <div className="border-r h-12 border-profile mt-1 mb-1" />
      <div className="w-1/3">
       <button
        className="text-white flex inline text-sm p-4 focus:bg-transparent focus:outline-none"
        onClick={() => console.log('invite')}
       >
        <img src={add} className="h-4 pr-3 pt-1" alt="invite-sign" />
        Invite
       </button>
      </div>
     </div>
    </>
   ))}
   <button
    className="mt-4 focus:bg-transparent active:outline-none shadow-none"
    onClick={() => addNote()}
   >
    <img src={plus} className="h-8" alt="add-sing" />
   </button>
  </div>
 )
}
