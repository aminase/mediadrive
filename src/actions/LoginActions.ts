import IUserRegistrationData from '../types/UserRegistrationData'
import IUserLoginData from '../types/UserLoginData'

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
 payload: IUserLoginData
}

const doUserLogin = (credentials: IUserLoginData) => {
 return {
  type: MEDIA_ACTIONS.DO_USER_LOGIN,
  payload: credentials,
 }
}

interface ISetUserLogin {
 type: typeof MEDIA_ACTIONS.SET_USER_LOGIN
 payload: IUserLoginData
}

const setUserLogin = (credentials: IUserLoginData) => {
 return {
  type: MEDIA_ACTIONS.SET_USER_LOGIN,
  payload: {
   credentials,
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
