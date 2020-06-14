import IUserLoginData from '../types/UserLoginData'
import { IAllActions, MEDIA_ACTIONS } from '../actions/LoginActions'

interface ILoginReducer {
 credentials: IUserLoginData | null
}

const defaultState = {
 credentials: null,
}

export default (state: ILoginReducer = defaultState, action: IAllActions) => {
 switch (action.type) {
  case MEDIA_ACTIONS.SET_USER_LOGIN:
   return {
    ...state,
    credentials: action.payload,
   }
  default:
   return state
 }
}
