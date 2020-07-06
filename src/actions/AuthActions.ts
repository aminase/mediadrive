import IUser from '../types/User'

enum AUTH_ACTIONS {
 DO_USER_REGISTRATION = 'AUTH_ACTIONS::DO_USER_REGISTRATION',
 DO_USER_LOGIN = 'AUTH_ACTIONS::DO_USER_LOGIN',
 SET_USER = 'AUTH_ACTIONS::SET_USER',
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

export type IAllActions = IDoUserRegistration | IDoUserLogin

export { doUserRegistration, doUserLogin, AUTH_ACTIONS }
