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
import profile from './commons/profile.svg'
import notification from './commons/notification-icon.svg'
import { SignUp } from './components/SignUp'
import { Notification } from './components/Notification'
import { Email } from './pages/Email'

const App: React.FC = () => {
 const [isNotificationOpen, setIsNotificationOpen] = useState(false)
 const closeModal = () => setIsNotificationOpen(false)
 return (
  <BrowserRouter>
   <Switch>
    <Route path="/email" component={Email} />
   </Switch>
  </BrowserRouter>
 )
}

export default App
