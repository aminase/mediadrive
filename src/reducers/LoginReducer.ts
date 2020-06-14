import IUserLoginData from '../types/UserLoginData'
import { IAllActions, MEDIA_ACTIONS } from '../actions/LoginActions'

interface ILoginReducer {
 auth: IUserLoginData | null
}

const defaultState = {
 auth: null,
}

export default (state: ILoginReducer = defaultState, action: IAllActions) => {
 switch (action.type) {
  case MEDIA_ACTIONS.SET_USER_LOGIN:
   return {
    ...state,
    auth: action.payload,
   }
  default:
   return state
 }
}
