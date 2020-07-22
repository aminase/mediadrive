import { StoreState } from '../store'
import { Store } from 'mqtt'

const getUser = (state: StoreState) => state.user.user
const getLoadingStatus = (state: StoreState) => state.user.loading
const getErrorMessage = (state: StoreState) => state.authError.error
const getContactList = (state: StoreState) => state.user.contacts
const getInvitedUserList = (state: StoreState) => state.user.invitedUser

export {
 getUser,
 getLoadingStatus,
 getErrorMessage,
 getContactList,
 getInvitedUserList,
}
