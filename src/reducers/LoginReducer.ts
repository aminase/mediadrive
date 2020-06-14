import IUser from '../types/UserLoginData'
import { IAllActions, MEDIA_ACTIONS } from '../actions/LoginActions'

interface ILoginReducer {
 user: IUser | null
}
const defaultState = {
 user: null,
}

export default (state: ILoginReducer = defaultState, action: IAllActions) => {
 switch (action.type) {
  case MEDIA_ACTIONS.SET_USER_LOGIN:
   return {
    ...state,
    user: action.payload,
   }
  default:
   return state
 }
}
