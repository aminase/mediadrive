import IData from '../types/UserSignUpData'
import { IAllActions, MEDIA_ACTIONS } from '../actions/LoginActions'

interface ILoginReducer {
  signUpCredentials: IData[]
}

const defaultState = {
  signUpCredentials: [],
}

export default (state: ILoginReducer = defaultState, action: IAllActions) => {
  switch (action.type) {
    case MEDIA_ACTIONS.DO_SIGN_UP_USER:
      return {
        ...state,
        signUpCredentials: action.payload,
      }
    default:
      return state
  }
}
