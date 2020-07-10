import { IAllActions, AUTH_ACTIONS } from '../actions/AuthActions'

interface IErrorData {
 error: any
}

const defaultState = {
 error: {
  message: '',
 },
}

export default (state: IErrorData = defaultState, action: IAllActions) => {
 switch (action.type) {
  case AUTH_ACTIONS.SET_AUTH_ERROR:
   return {
    ...state,
    error: { ...state.error.message, ...action.payload },
   }
  default:
   return state
 }
}
