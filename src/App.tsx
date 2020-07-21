import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Upload } from './pages/Upload'
import { Contacts } from './pages/Contacts'
import { Invite } from './pages/Invite'
import { Profile } from './pages/Profile'
import { Files } from './pages/Files'
import { Send } from './pages/Send'
import { Progress } from './pages/Progress'
import settings from './commons/settings-icon.svg'
import upload from './commons/upload.svg'
import mediadrive from './commons/logo.svg'
import contacts from './commons/contact.svg'
import invite from './commons/invite.svg'
import image from './commons/profile.svg'
import notification from './commons/notification-icon.svg'
import { Registration } from './components/Registration'
import { Notification } from './components/Notification'
import { Settings } from './components/Settings'
import { Login } from './components/Login'
import { PrivateRoute } from './components/PrivateRoute'
import { Spinner } from './assets/Spinner'
import { useSelector } from 'react-redux'
import { getLoadingStatus } from './selectors/UserSelector'

const App: React.FC = () => {
 const [isNotificationOpen, setIsNotificationOpen] = useState(false)
 const [isOpenModal, setIsOpenModal] = useState(false)

 const closeNotificationModal = () => setIsNotificationOpen(false)

 const closeModal = () => setIsOpenModal(false)
 const loading = useSelector(getLoadingStatus)

 const userLocalStorage = localStorage.getItem('user')

 return (
  <BrowserRouter>
   <div className="flex justify-between my-5 mx-8">
    {' '}
    <NavLink to="/upload" className="focus:outline-none lg">
     <img src={mediadrive} alt="mediadrive" className="h-5" />
    </NavLink>
    <div className="flex justify-end">
     <button
      className="focus:outline-gray focus:bg-transparent mr-6"
      onClick={() => setIsNotificationOpen(true)}
     >
      <img src={notification} alt="notification" className="h-5" />
     </button>
     <button
      className="focus:outline-none focus:bg-transparent"
      onClick={() => setIsOpenModal(true)}
     >
      <img src={settings} alt="settings" className="h-5" />
     </button>
    </div>
   </div>
   {userLocalStorage && isNotificationOpen && (
    <Notification closeNotificationModal={closeNotificationModal} />
   )}
   {loading && (
    <div className="flex fixed  column bg-white justify-center align-center opacity-75 z-40 left-0 right-0 bottom-0 top-50 w-full h-full">
     <Spinner className="bg-white-file" />
    </div>
   )}
   {userLocalStorage && isOpenModal && <Settings closeModal={closeModal} />}
   <div className="flex mb-3 bg-navgray active:bg-current-gray h-20 font-sans-main z-0">
    <NavLink
     to="/upload"
     className="w-1/4 p-3 flex flex-col justify-center hover:bg-current-gray focus:bg-navlink"
    >
     <img src={upload} alt="upload" className="justify-center h-8" />
     <div className="text-white pt-1 text-center text-xs leading-tight tracking-tighter font-sans-main">
      Upload
     </div>
    </NavLink>
    <div className="border-r border-profile mt-2 mb-2" />
    <NavLink
     to="/contacts"
     className="w-1/4 p-3 flex flex-col justify-center hover:bg-current-gray focus:bg-navlink"
    >
     <img src={contacts} alt="contacts" className="justify-center h-8" />
     <div className="text-white pt-1 text-center text-xs leading-tight tracking-tighter font-sans-main">
      Contacts
     </div>{' '}
    </NavLink>
    <div className="border-r border-profile mt-2 mb-2" />

    <NavLink
     to="/invite"
     className="w-1/4 p-3 flex flex-col justify-center hover:bg-current-gray focus:bg-navlink"
    >
     <img src={invite} alt="invite" className="justify-center h-8" />
     <div className="text-white pt-1 text-center text-xs leading-tight tracking-tighter font-sans-main ">
      Invite
     </div>
    </NavLink>
    <div className="border-r border-profile mt-2 mb-2" />
    <NavLink
     to="/profile"
     className="w-1/4 p-3 flex flex-col justify-center hover:bg-current-gray focus:bg-navlink"
    >
     <img src={image} alt="profile" className="justify-center  h-8" />
     <div className="text-white pt-1 text-center text-xs leading-tight tracking-tighter font-sans-main">
      Profile
     </div>
    </NavLink>
   </div>
   <div className="flex bg-options mr-8 ml-8 rounded-md text-white text-center h-10 font-sans-main">
    <NavLink
     to="/files"
     className="w-1/3 flex justify-center hover:bg-gray-800 active:bg-gray-800 focus:bg-options rounded-l-md"
    >
     <div className="flex self-center text-white text-center text-sm font-sans-main leading-none tracking-tighter p-4">
      Files
     </div>
    </NavLink>
    <div className="border-r border-profile" />
    <NavLink
     to="/send"
     className="w-1/3 flex justify-center hover:bg-gray-800 active:bg-gray-800 focus:bg-options"
    >
     <div className="flex self-center text-white text-center text-sm font-sans-main leading-none tracking-tighter">
      Send
     </div>
    </NavLink>{' '}
    <div className="border-r border-profile" />
    <NavLink
     to="/progress"
     className="w-1/3 flex justify-center hover:bg-gray-800 active:bg-gray-800 focus:bg-options rounded-r-md"
    >
     <div className="flex self-center text-white text-center text-sm font-sans-main leading-none tracking-tighter">
      Progress
     </div>
    </NavLink>
   </div>
   <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/registration" component={Registration} />
    <PrivateRoute path="/upload" component={Upload} />
    <PrivateRoute path="/contacts" component={Contacts} />
    <PrivateRoute path="/invite" component={Invite} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/files" component={Files} />
    <PrivateRoute path="/send" component={Send} />
    <PrivateRoute path="/progress" component={Progress} />
   </Switch>
   <div className="flex justify-center absolute inset-x-0 bottom-0 bg-white text-center mr-8 ml-8 bg-options rounded-md mb-4 font-sans-main h-10">
    <button className="text-white text-center text-sm font-sans-main leading-none tracking-tighter self-center focus:bg-update">
     Update Available
    </button>{' '}
   </div>
  </BrowserRouter>
 )
}

export default App
