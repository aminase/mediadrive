import IUser from '../types/User'

enum AUTH_ACTIONS {
 DO_USER_REGISTRATION = 'AUTH_ACTIONS::DO_USER_REGISTRATION',
 DO_USER_LOGIN = 'AUTH_ACTIONS::DO_USER_LOGIN',
 SET_USER = 'AUTH_ACTIONS::SET_USER',
 SET_AUTH_ERROR = 'AUTH_ACTIONS::SET_AUTH_ERROR',
}

type IUserRegistration = Pick<IUser, 'username' | 'email' | 'password'>
type IUserLogin = Pick<IUser, 'username' | 'password'>

interface IDoUserRegistration {
 type: typeof AUTH_ACTIONS.DO_USER_REGISTRATION
 payload: IUserRegistration & { history: any }
}

const doUserRegistration = (user: IUserRegistration & { history: any }) => {
 return {
  type: AUTH_ACTIONS.DO_USER_REGISTRATION,
  payload: user,
 }
}

interface IDoUserLogin {
 type: typeof AUTH_ACTIONS.DO_USER_LOGIN
 payload: IUserLogin & { history: any }
}

const doUserLogin = (user: IUserLogin & { history: any }) => {
 return {
  type: AUTH_ACTIONS.DO_USER_LOGIN,
  payload: user,
 }
}

interface ISetAuthError {
 type: typeof AUTH_ACTIONS.SET_AUTH_ERROR
 payload: any
}

const setAuthError = (error: any) => {
 return {
  type: AUTH_ACTIONS.SET_AUTH_ERROR,
  payload: {
   error,
  },
 }
}

export type IAllActions = IDoUserRegistration | IDoUserLogin | ISetAuthError

export { doUserRegistration, doUserLogin, setAuthError, AUTH_ACTIONS }
