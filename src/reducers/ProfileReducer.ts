import IUser from '../types/UserLoginData'
import { IAllActions, PROFILE_ACTIONS } from '../actions/ProfileActions'
import IProfile from '../types/UserProfile'

interface IProfileReducer {
 profile: IProfile | null
}

const defaultState = {
 profile: null,
}

export default (state: IProfileReducer = defaultState, action: IAllActions) => {
 switch (action.type) {
  case PROFILE_ACTIONS.SET_PROFILE:
   return { ...state, profile: action.payload }
  default:
   return state
 }
}
