import React, { useEffect, useState } from 'react'
import avatar from '../commons/profile-avatar.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { getUserTokenAction } from '../actions/UserActions'

export const Profile: React.FC = () => {
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getUserTokenAction())
 }, [])

 const profile = useSelector(getUser)

 useEffect(() => {
  dispatch(getUserTokenAction())
 }, [profile])

 return (
  <div className="flex items-center flex-col mt-2 mr-8 ml-8">
   <div className="flex items-center border-solid min-h-full rounded mt-12 mb-8">
    <img src={avatar} className="h-24" alt="profile-avatar" />
   </div>
   {profile && (
    <div className="w-full max-w-sm">
     <div className="flex items-center bg-field mb-2">
      <div className="w-1/3 border-r border-profile">
       <label className="flex text-center ml-3 p-2 mt-1 text-base font-sans-main leading-none tracking-tighter">
        Name
       </label>
      </div>
      <div className="w-2/3 h-12 pl-5 pt-5">
       <div className="text-white text-base font-sans-main leading-none tracking-none focus:shadow-none active:shadow-none shadow-none font-normal">
        John Doe
       </div>
      </div>
     </div>
     <div className="flex items-center bg-field mb-2">
      <div className="w-1/3 border-r border-profile">
       <label className="flex text-center ml-3 p-2 mt-1 text-base font-sans-main leading-none tracking-tighter">
        Username
       </label>
      </div>
      <div className="w-2/3 h-12 pl-5 pt-5">
       <div className="text-white text-base font-sans-main leading-none tracking-none focus:shadow-none active:shadow-none shadow-none font-normal">
        {profile.user.username}
       </div>
      </div>
     </div>
     <div className="flex items-center bg-field">
      <div className="w-1/3">
       <label className="flex text-center ml-3 p-2 mt-1 border-r-2 border-profile text-base font-sans-main leading-none tracking-tighter">
        Email
       </label>
      </div>
      <div className="w-2/3 h-12 pl-5 pt-5">
       <div className="text-white text-base font-sans-main leading-none tracking-none focus:shadow-none active:shadow-none shadow-none font-normal">
        {profile.user.email}
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 )
}
