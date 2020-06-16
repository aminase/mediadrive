import IUser from '../types/User'

enum USER_ACTIONS {
 SET_USER = 'USER_ACTIONS::SET_USER',
}

interface ISetUser {
 type: typeof USER_ACTIONS.SET_USER
 payload: IUser[]
}

const setUser = (userData: IUser[]) => {
 return {
  type: USER_ACTIONS.SET_USER,
  payload: {
   userData,
  },
 }
}

export type IAllActions = ISetUser

export { setUser, USER_ACTIONS }
