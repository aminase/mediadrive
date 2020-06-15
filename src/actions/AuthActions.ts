import IUserRegistrationData from '../types/UserRegistrationData'
import IUser from '../types/UserLoginData'

enum MEDIA_ACTIONS {
 DO_USER_REGISTRATION = 'MEDIA_ACTIONS::DO_USER_REGISTRATION',
 SET_USER_REGISTRATION = 'MEDIA_ACTIONS::SET_USER_REGISTRATION',
 DO_USER_LOGIN = 'MEDIA_ACTIONS::DO_USER_LOGIN',
 SET_USER_LOGIN = 'MEDIA_ACTIONS::SET_USER_LOGIN',
}

interface IDoUserRegistration {
 type: typeof MEDIA_ACTIONS.DO_USER_REGISTRATION
 payload: IUserRegistrationData
}

const doUserRegistration = (credentials: IUserRegistrationData) => {
 return {
  type: MEDIA_ACTIONS.DO_USER_REGISTRATION,
  payload: credentials,
 }
}

interface ISetUserRegistration {
 type: typeof MEDIA_ACTIONS.SET_USER_REGISTRATION
 payload: IUserRegistrationData
}

const setUserAction = (credentials: IUserRegistrationData) => {
 return {
  type: MEDIA_ACTIONS.SET_USER_REGISTRATION,
  payload: {
   credentials,
  },
 }
}

interface IDoUserLogin {
 type: typeof MEDIA_ACTIONS.DO_USER_LOGIN
 payload: IUser
}

const doUserLogin = (user: IUser) => {
 return {
  type: MEDIA_ACTIONS.DO_USER_LOGIN,
  payload: user,
 }
}

interface ISetUserLogin {
 type: typeof MEDIA_ACTIONS.SET_USER_LOGIN
 payload: IUser
}

const setUserLogin = (user: IUser) => {
 return {
  type: MEDIA_ACTIONS.SET_USER_LOGIN,
  payload: {
   user,
  },
 }
}

export type IAllActions =
 | IDoUserRegistration
 | ISetUserRegistration
 | ISetUserLogin
 | IDoUserLogin

export {
 doUserRegistration,
 setUserAction,
 doUserLogin,
 setUserLogin,
 MEDIA_ACTIONS,
}
