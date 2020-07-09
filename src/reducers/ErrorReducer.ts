import { IAllActions, AUTH_ACTIONS } from '../actions/AuthActions'
import IUser from '../types/User'

interface IErrorData {
 error: any
}

const defaultState = {
 error: [],
}

export default (state: IErrorData = defaultState, action: IAllActions) => {
 switch (action.type) {
  case AUTH_ACTIONS.GET_AUTH_ERROR:
   return {
    ...state,
    error: [...state.error, action.payload],
   }
  default:
   return state
 }
}
