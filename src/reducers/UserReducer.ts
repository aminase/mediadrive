import { IAllActions, USER_ACTIONS } from '../actions/UserActions'
import IUser from '../types/User'

interface IUserData {
 user: IUser | null
 loading: boolean
 error: null
}

const defaultState = {
 user: null,
 loading: false,
 error: null,
}

export default (state: IUserData = defaultState, action: IAllActions) => {
 switch (action.type) {
  case USER_ACTIONS.SET_USER:
   return {
    ...state,
    user: { ...state.user, ...action.payload },
   }

  case USER_ACTIONS.TOGGLE_LOADER:
   return {
    ...state,
    loading: !state.loading,
   }

  case USER_ACTIONS.GET_AUTH_ERROR:
   return {
    ...state,
    error: state.error,
   }
  default:
   return state
 }
}
