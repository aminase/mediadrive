import IUserRegistrationData from '../types/UserRegistrationData'
import { IAllActions, MEDIA_ACTIONS } from '../actions/AuthActions'

interface IRegistrationReducer {
 credentials: null | IUserRegistrationData
}

const defaultState = {
 credentials: null,
}

export default (
 state: IRegistrationReducer = defaultState,
 action: IAllActions
) => {
 switch (action.type) {
  case MEDIA_ACTIONS.SET_USER_REGISTRATION:
   return {
    ...state,
    credentials: action.payload,
   }
  default:
   return state
 }
}
