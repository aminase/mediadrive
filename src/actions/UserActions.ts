enum USER_ACTIONS {
 FETCH_USER = 'USER_ACTIONS:FETCH_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
 TOGGLE_LOADER = 'USER_ACTIONS.TOGGLE_LOADER',
 INVITE_USER = 'USER_ACTIONS.INVITE_USER',
 FETCH_USER_INVITEE = 'USER_ACTIONS.FETCH_USER_INVITEE',
 SET_USER_INVITEE = 'USER_ACTIONS.SET_USER_INVITEE',
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
 type: typeof USER_ACTIONS.FETCH_USER_INVITEE
 payload: string
}

const fetchUserInvitee = (userId: any) => {
 return {
  type: USER_ACTIONS.FETCH_USER_INVITEE,
  payload: userId,
 }
}

interface ISetUserInvitee {
 type: typeof USER_ACTIONS.SET_USER_INVITEE
 payload: any
}

const setUserInvitee = (invitedUser: any) => {
 return {
  type: USER_ACTIONS.SET_USER_INVITEE,
  payload: invitedUser,
 }
}

interface IToggleLoader {
 type: typeof USER_ACTIONS.TOGGLE_LOADER
}

const toggleLoader = () => {
 return { type: USER_ACTIONS.TOGGLE_LOADER }
}

interface IInviteUser {
 type: typeof USER_ACTIONS.INVITE_USER
 payload: any
}

const inviteUserAction = (email: any) => {
 return {
  type: USER_ACTIONS.INVITE_USER,
  payload: {
   email,
  },
 }
}

export type IAllActions =
 | IFetchUser
 | ISetUser
 | IToggleLoader
 | IInviteUser
 | IFetchUserInvitee
 | ISetUserInvitee

export {
 fetchUserAction,
 setUser,
 toggleLoader,
 inviteUserAction,
 fetchUserInvitee,
 setUserInvitee,
 USER_ACTIONS,
}
