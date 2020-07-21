import { StoreState } from '../store'

const getUser = (state: StoreState) => state.user.user
const getLoadingStatus = (state: StoreState) => state.user.loading
const getErrorMessage = (state: StoreState) => state.authError.error
const getIniviteesList = (state: StoreState) => state.user.invitedUser

export { getUser, getLoadingStatus, getErrorMessage, getIniviteesList }
