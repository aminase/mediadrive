enum USER_ACTIONS {
 FETCH_USER = 'USER_ACTIONS:FETCH_USER',
 SET_USER = 'USER_ACTIONS::SET_USER',
 TOGGLE_LOADER = 'USER_ACTIONS.TOGGLE_LOADER',
 GET_AUTH_ERROR = 'USER_ACTIONS.GET_AUTH_ERROR',
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

interface IGetLoginError {
 type: typeof USER_ACTIONS.GET_AUTH_ERROR
 payload: any
}

const getLoginError = (error: any) => {
 return {
  type: USER_ACTIONS.GET_AUTH_ERROR,
  payload: {
   error,
  },
 }
}

interface IToggleLoader {
 type: typeof USER_ACTIONS.TOGGLE_LOADER
}

const toggleLoader = () => {
 return { type: USER_ACTIONS.TOGGLE_LOADER }
}

export type IAllActions = IFetchUser | ISetUser | IToggleLoader | IGetLoginError

export { fetchUserAction, setUser, toggleLoader, getLoginError, USER_ACTIONS }
