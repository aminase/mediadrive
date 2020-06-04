import React from 'react'
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
import mediadrive from './commons/mediadrive-icon.svg'
import contacts from './commons/contact.svg'
import invite from './commons/invite.svg'
import profile from './commons/profile.svg'
import notification from './commons/notification-icon.svg'
import { SignUp } from './components/SignUp'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-between m-3">
        {' '}
        <NavLink to="/" className="focus:outline-none lg">
          <img
            src={mediadrive}
            alt="mediadrive"
            className="ml-5 mt-3 mb-3 h-4"
          />
        </NavLink>
        <div className="mt-3 mr-5">
          <button className="focus:outline-gray active:outline-gray mr-6">
            <img src={notification} alt="notification" className="h-5" />
          </button>
          <button className="focus:outline-none active:outline-none">
            <img src={settings} alt="settings" className="h-5" />
          </button>
        </div>
      </div>
      <div className="flex mb-3 bg-navgray bg-navgray-400 active:bg-current-gray h-20 font-sans-main">
        <NavLink
          to="/"
          className="w-1/4 border-r border-main flex flex-col justify-center hover:bg-current-gray active:bg-current-gray"
        >
          <img src={upload} alt="upload" className="justify-center" />
          <div className="text-white p-2 text-center text-xs leading-tight tracking-tighter font-sans-main">
            Upload
          </div>
        </NavLink>
        <NavLink
          to="/contacts"
          className="w-1/4 border-r border-main flex flex-col justify-center hover:bg-current-gray active:bg-current-gray"
        >
          <img src={contacts} alt="contacts" className="justify-center" />
          <div className="text-white p-2 text-center text-xs leading-tight tracking-tighter font-sans-main">
            Contacts
          </div>
        </NavLink>
        <NavLink
          to="/invite"
          className="w-1/4 border-r border-main flex flex-col justify-center hover:bg-current-gray active:bg-current-gray"
        >
          <img src={invite} alt="invite" className="justify-center" />
          <div className="text-white p-2 text-center text-xs leading-tight tracking-tighter font-sans-main ">
            Invite
          </div>
        </NavLink>
        <NavLink
          to="/profile"
          className="w-1/4 flex flex-col justify-center hover:bg-current-gray active:bg-current-gray p-4"
        >
          <img src={profile} alt="profile" className="justify-center" />
          <div className="text-white p-2 text-center text-xs leading-tight tracking-tighter font-sans-main">
            Profile
          </div>
        </NavLink>
      </div>
      <div className="flex bg-options mr-8 ml-8 rounded-md text-white text-center h-10 hover:bg-gray-800 active:bg-gary-800 font-sans-main">
        <NavLink
          to="/files"
          className="w-1/3 border-r border-main divide-opacity-50 hover:bg-gray-800 active:bg-gray-800"
        >
          <div className="text-white text-center text-sm font-sans-main leading-none tracking-tighter p-4">
            Files
          </div>
        </NavLink>
        <NavLink
          to="/send"
          className="w-1/3 border-r border-main divide-opacity-400 hover:bg-gray-800 active:bg-gray-800"
        >
          <div className="text-white text-center text-sm font-sans-main leading-none tracking-tighter p-4">
            Send
          </div>
        </NavLink>
        <NavLink
          to="/progress"
          className="w-1/3 hover:bg-gray-800 active:bg-gray-800"
        >
          <div className="text-white text-center text-sm font-sans-main leading-none tracking-tighter p-4">
            Progress
          </div>
        </NavLink>
      </div>
      <Switch>
        <Route path="/" component={Upload} exact />
        <Route path="/contacts" component={Contacts} />
        <Route path="/invite" component={Invite} />
        <Route path="/profile" component={Profile} />
        <Route path="/files" component={Files} />
        <Route path="/send" component={Send} />
        <Route path="/progress" component={Progress} />
        <Route path="/login" component={SignUp} />
      </Switch>
      <div className="absolute inset-x-0 bottom-0 bg-white text-center mr-8 ml-8 bg-options rounded-md mb-4 font-sans-main h-10">
        <button className="text-white text-center text-sm font-sans-main leading-none tracking-tighter p-4">
          Update Available
        </button>{' '}
      </div>
    </BrowserRouter>
  )
}

export default App
