import IUser from '../types/User'

enum AUTH_ACTIONS {
 DO_USER_REGISTRATION = 'AUTH_ACTIONS::DO_USER_REGISTRATION',
 DO_USER_LOGIN = 'AUTH_ACTIONS::DO_USER_LOGIN',
 SET_USER = 'AUTH_ACTIONS::SET_USER',
 GET_AUTH_ERROR = 'AUTH_ACTIONS::GET_AUTH_ERROR',
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

interface IGetAuthError {
 type: typeof AUTH_ACTIONS.GET_AUTH_ERROR
 payload: any
}

const getAuthError = (error: any) => {
 return {
  type: AUTH_ACTIONS.GET_AUTH_ERROR,
  payload: {
   error,
  },
 }
}

export type IAllActions = IDoUserRegistration | IDoUserLogin | IGetAuthError

export { doUserRegistration, doUserLogin, getAuthError, AUTH_ACTIONS }
