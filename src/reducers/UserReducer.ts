import { IAllActions, USER_ACTIONS } from '../actions/UserActions'
import IUser from '../types/User'

interface IUserData {
 user: IUser | null
}

const defaultState = {
 user: null,
}

export default (state: IUserData = defaultState, action: IAllActions) => {
 switch (action.type) {
  case USER_ACTIONS.SET_USER:
   console.log('data', action.payload)

   return {
    ...state,
    user: { ...state.user, ...action.payload },
   }

  default:
   return state
 }
}