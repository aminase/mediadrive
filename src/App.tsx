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
import upload from './commons/upload-icon.svg'
import mediadrive from './commons/mediadrive-icon.svg'
import contacts from './commons/contacts-icon.svg'
import invite from './commons/invite-icon.svg'
import profile from './commons/profile-icon.svg'
import notification from './commons/notification-icon.svg'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-between m-4">
        {' '}
        <NavLink to="/" className="focus:outline-none lg">
          <img src={mediadrive} width="100" height="100" />
        </NavLink>
        <div>
          <button className="focus:outline-gray active:outline-gray mr-5">
            <img src={notification} width="23" height="20" />
          </button>
          <button className="focus:outline-gray active:outline-gray">
            <img src={settings} width="23" height="20" />
          </button>
        </div>
      </div>
      <div className="flex mb-4 bg-navgray bg-navgray-400 justify-center active:bg-activegray focus:bg-activegray hover:bg-activegray">
        <NavLink to="/" className="w-1/4 border-r-2 border-white-600 pt-5">
          <img src={upload} height="70" width="70" className="ml-48 m-5" />
          <div className="text-white mt-2 text-center pb-5">Upload</div>
        </NavLink>
        <NavLink
          to="/contacts"
          className="w-1/4 border-r-2 border-white-600 pt-8"
        >
          <img src={contacts} height="50" width="50" className="ml-48 m-5" />
          <div className="text-white mt-2 text-center pb-5">Contacts</div>
        </NavLink>
        <NavLink
          to="/invite"
          className="w-1/4 border-r-2 border-white-600 pt-5"
        >
          <img src={invite} height="50" width="50" className="ml-48 m-5" />
          <div className="text-white mt-2 text-center pb-5">Invite</div>
        </NavLink>
        <NavLink to="/profile" className="w-1/4 pt-5">
          <img src={profile} height="50" width="50" className="ml-48 m-5" />
          <div className="text-white mt-2 text-center">Profile</div>
        </NavLink>
      </div>
      <div className="flex bg-options mr-12 ml-12 rounded-md text-white text-center h-12 hover:bg-hover">
        <NavLink
          to="/files"
          className="w-1/4 justify-center px-5 py-1 m-2 border-r-2 border-gray-500 hover:bg-hover "
        >
          Files
        </NavLink>
        <NavLink
          to="/send"
          className="flex-1 px-5 py-1 m-2 border-r-2 border-gray-500 hover:bg-hover "
        >
          Send
        </NavLink>
        <NavLink
          to="/progress"
          className="flex-1 px-5 py-1 m-2 hover:bg-green-800 w-full"
        >
          Progress
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
      </Switch>
      {/* <footer className="flex flex-col w-full text-center mr-12 ml-12">
        <button className="relative inset-x-0 bottom-0 h-8 bg-gray-700 text-white text-center	rounded">
          Update Available
        </button>
      </footer> */}
    </BrowserRouter>
  )
}

export default App
