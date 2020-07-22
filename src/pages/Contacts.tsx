import React, { useEffect } from 'react'
import user from '../commons/user.svg'
import avatar from '../commons/avatar.svg'
import { useSelector, useDispatch } from 'react-redux'
import { getContactList } from '../selectors/UserSelector'
import { fetchUserContacts } from '../actions/UserActions'

export const Contacts: React.FC = () => {
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(fetchUserContacts())
 }, [])

 const contactList = useSelector(getContactList)

 console.log(contactList, 'list of contacts')

 return (
  <div className="mr-8 ml-8 mt-8">
   {contactList == '' ? (
    <div className="text-white center">
     {' '}
     You have no contact so far. Please go to Invite section and add some.
    </div>
   ) : (
    contactList.map((contact: any) => (
     <Contact email={contact.email}>Online</Contact>
    ))
   )}
  </div>
 )
}

const Contact = ({ email, children }: any) => {
 return (
  <div className="flex items-center mb-2 bg-field h-12">
   <div className="pr-2 pl-2">
    <img src={avatar} className="rounded-full h-8" alt="user" />
   </div>
   <div className="w-2/3">
    <div className="text-white font-14">{email}</div>
   </div>
   <div className="border-r h-10 border-profile" />
   <div className="w-1/3">
    <div className="text-right flex block justify-around">
     <div className="rounded-full bg-green-700 h-2 w-2 mt-2 mr-2 ml-3" />
     <div className="m-1 mr-20 text-sm text-white">{children}</div>
    </div>
   </div>
  </div>
 )
}
