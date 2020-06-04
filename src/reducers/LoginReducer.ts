import IUserSignUpData from '../types/UserSignUpData'
import { IAllActions, MEDIA_ACTIONS } from '../actions/LoginActions'

interface ILoginReducer {
  user: IUserSignUpData | null
}

const defaultState = {
  user: null,
}

export default (state: ILoginReducer = defaultState, action: IAllActions) => {
  switch (action.type) {
    case MEDIA_ACTIONS.SET_SIGN_UP_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
