import { IAllActions, USER_ACTIONS } from '../actions/UserActions'
import IUser from '../types/User'

interface IUserData {
 user: IUser | null
 loading: boolean
 invite: any
 contacts: any
 invitedUser: any
}

const defaultState = {
 user: null,
 loading: false,
 invite: null,
 contacts: [],
 invitedUser: [],
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
  case USER_ACTIONS.SET_USER_INVITATION:
   return { ...state, invitedUser: action.payload }

  case USER_ACTIONS.SET_USER_CONTACTS:
   return { ...state, contacts: action.payload }

  default:
   return state
 }
}
