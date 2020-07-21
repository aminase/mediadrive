enum USER_ACTIONS {
 FETCH_USER = 'USER_ACTIONS:FETCH_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
 TOGGLE_LOADER = 'USER_ACTIONS.TOGGLE_LOADER',
 INVITE_USER = 'USER_ACTIONS.INVITE_USER',
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
export type IAllActions = IFetchUser | ISetUser | IToggleLoader | IInviteUser

export {
 fetchUserAction,
 setUser,
 toggleLoader,
 inviteUserAction,
 USER_ACTIONS,
}
