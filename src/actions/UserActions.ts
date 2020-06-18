import IUser from '../types/User'

enum USER_ACTIONS {
 GET_USER = 'USER_ACTIONS:GET_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
 GET_USER_TOKEN = 'USER_ACTIONS::GET_USER_TOKEN',
 SET_USER_TOKEN = 'USER_ACTION::SET_USER_TOKEN',
}

type IUserToken = Pick<IUser, 'token'>

interface IGetUserAction {
 type: typeof USER_ACTIONS.GET_USER
}

const getUserAction = () => {
 return {
  type: USER_ACTIONS.GET_USER,
 }
}

interface ISetUserAction {
 type: typeof USER_ACTIONS.SET_USER
 payload: any
}

const setUserAction = (user: any) => {
 return {
  type: USER_ACTIONS.SET_USER,
  payload: {
   user,
  },
 }
}

interface IGetUserTokenAction {
 type: typeof USER_ACTIONS.GET_USER_TOKEN
}

const getUserTokenAction = () => {
 return {
  type: USER_ACTIONS.GET_USER_TOKEN,
 }
}

interface ISetUserTokenAction {
 type: typeof USER_ACTIONS.SET_USER_TOKEN
 payload: any
}

const setUserTokenAction = (token: any) => {
 return {
  type: USER_ACTIONS.SET_USER_TOKEN,
  payload: {
   token,
  },
 }
}

export type IAllActions =
 | ISetUserAction
 | IGetUserAction
 | ISetUserTokenAction
 | IGetUserTokenAction

export {
 setUserAction,
 getUserAction,
 setUserTokenAction,
 getUserTokenAction,
 USER_ACTIONS,
}
