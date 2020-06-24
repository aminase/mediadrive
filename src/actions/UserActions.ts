enum USER_ACTIONS {
 FETCH_USER = 'USER_ACTIONS:FETCH_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
}

interface IFetchUser {
 type: typeof USER_ACTIONS.FETCH_USER
 payload: string
}

const fetchUser = (id: string) => {
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

export type IAllActions = IFetchUser | ISetUser

export { fetchUser, setUser, USER_ACTIONS }
