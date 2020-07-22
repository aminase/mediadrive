enum USER_ACTIONS {
 FETCH_USER = 'USER_ACTIONS:FETCH_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
 TOGGLE_LOADER = 'USER_ACTIONS.TOGGLE_LOADER',
 USER_INVITATION = 'USER_ACTIONS.USER_INVITATION',
 FETCH_USER_INVITATION = 'USER_ACTIONS.FETCH_USER_INVITATION',
 SET_USER_INVITATION = 'USER_ACTIONS.SET_USER_INVITATION',
 FETCH_USER_CONTACTS = 'USER_ACTIONS.FETCH_USER_CONTACTS',
 SET_USER_CONTACTS = 'USER_ACTIONS.SET_USER_CONTACTS',
}

interface IFetchUser {
 type: typeof USER_ACTIONS.FETCH_USER
 payload: string
}

const fetchUserAction = (id: string) => {
 return {
  type: USER_ACTIONS.FETCH_USER,
  payload: id,
 }
}

interface ISetUser {
 type: typeof USER_ACTIONS.SET_USER
 payload: any
}

const setUser = (user: any) => {
 return {
  type: USER_ACTIONS.SET_USER,
  payload: {
   user,
  },
 }
}

interface IFetchUserInvitee {
 type: typeof USER_ACTIONS.FETCH_USER_CONTACTS
}

const fetchUserContacts = () => {
 return {
  type: USER_ACTIONS.FETCH_USER_CONTACTS,
 }
}

interface ISetUserInvitee {
 type: typeof USER_ACTIONS.SET_USER_CONTACTS
 payload: any
}

const setUserContacts = (invitedUser: any) => {
 return {
  type: USER_ACTIONS.SET_USER_CONTACTS,
  payload: invitedUser,
 }
}

interface IToggleLoader {
 type: typeof USER_ACTIONS.TOGGLE_LOADER
}

const toggleLoader = () => {
 return { type: USER_ACTIONS.TOGGLE_LOADER }
}

interface IUserInvite {
 type: typeof USER_ACTIONS.USER_INVITATION
 payload: any
}

const userInviteAction = (email: any) => {
 return {
  type: USER_ACTIONS.USER_INVITATION,
  payload: {
   email,
  },
 }
}
interface IFetchUserInvitation {
 type: typeof USER_ACTIONS.FETCH_USER_INVITATION
 payload: any
}

const fetchUserInvitation = () => {
 return {
  type: USER_ACTIONS.FETCH_USER_INVITATION,
 }
}

interface ISetUserInvitation {
 type: typeof USER_ACTIONS.SET_USER_INVITATION
 payload: any
}

const setUserInvitation = (invite: any) => {
 return {
  type: USER_ACTIONS.SET_USER_INVITATION,
  payload: invite,
 }
}

export type IAllActions =
 | IFetchUser
 | ISetUser
 | IToggleLoader
 | IUserInvite
 | IFetchUserInvitation
 | ISetUserInvitation
 | IFetchUserInvitee
 | ISetUserInvitee

export {
 fetchUserAction,
 setUser,
 toggleLoader,
 userInviteAction,
 fetchUserInvitation,
 setUserInvitation,
 fetchUserContacts,
 setUserContacts,
 USER_ACTIONS,
}
