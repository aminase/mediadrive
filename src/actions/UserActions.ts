enum USER_ACTIONS {
 GET_USER = 'USER_ACTIONS:GET_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
}

interface IGetUser {
 type: typeof USER_ACTIONS.GET_USER
}

const getUser = () => {
 return {
  type: USER_ACTIONS.GET_USER,
 }
}

interface ISetUser {
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

export type IAllActions = ISetUser | IGetUser

export { setUserAction, getUser, USER_ACTIONS }
