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
import { SignIn } from './components/SignIn'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-between m-4">
        {' '}
        <NavLink to="/" className="focus:outline-none lg">
          <img
            src={mediadrive}
            width="100"
            height="120"
            className="pt-0.5 ml-4"
          />
        </NavLink>
        <div className="pt-1 pr-8">
          <button className="focus:outline-gray active:outline-gray mr-4">
            <img src={notification} width="14" height="20" />
          </button>
          <button className="focus:outline-none active:outline-none">
            <img src={settings} width="14" height="20" />
          </button>
        </div>
      </div>
      <div className="flex mb-4 bg-navgray bg-navgray-400 justify-center active:bg-current-gray">
        <NavLink
          to="/"
          className="w-1/4 border-r-2 border-white-500 p-8 hover:bg-current-gray active:bg-current-gray"
        >
          <img src={upload} height="70" width="120" className="ml-32 m-3" />
          <div className="text-white pt-2 text-center pb-5 text-lg pr-3">
            Upload
          </div>
        </NavLink>
        <NavLink
          to="/contacts"
          className="w-1/4 border-r-2 border-white-600 p-8 hover:bg-current-gray active:bg-current-gray"
        >
          <img src={contacts} height="100" width="70" className="ml-32 m-3" />
          <div className="text-white pt-2 text-center pb-5 text-lg pr-16">
            Contacts
          </div>
        </NavLink>
        <NavLink
          to="/invite"
          className="w-1/4 border-r-2 border-white-600 p-8 hover:bg-current-gray active:bg-current-gray"
        >
          <img src={invite} height="" width="80" className="ml-32 m-3" />
          <div className="text-white pt-6 text-center text-lg pr-16">
            Invite
          </div>
        </NavLink>
        <NavLink
          to="/profile"
          className="w-1/4 pt-5 p-8 hover:bg-current-gray active:bg-current-gray"
        >
          <img src={profile} height="70" width="100" className="ml-32 m-3" />
          <div className="text-white pt-2 text-center pb-5 text-lg pr-4">
            Profile
          </div>
        </NavLink>
      </div>
      <div className="flex bg-options mr-12 ml-12 rounded-md text-white text-center h-12 hover:bg-gray-800 active:bg-gary-800">
        <NavLink
          to="/files"
          className="w-1/3 pt-3 border-r-2 border-gray-500 hover:bg-gray-800 active:bg-gray-800"
        >
          Files
        </NavLink>
        <NavLink
          to="/send"
          className="w-1/3 pt-3 border-r-2 border-gray-500 hover:bg-gray-800 active:bg-gray-800"
        >
          Send
        </NavLink>
        <NavLink
          to="/progress"
          className="w-1/3 flex-1 pt-3 hover:bg-gray-800 active:bg-gray-800"
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
        <Route path="/login" component={SignIn} />
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
