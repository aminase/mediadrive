import { StoreState } from '../store'

const getUser = (state: StoreState) => state.user.user
const getLoadingStatus = (state: StoreState) => state.user.loading
const getErrorMessage = (state: StoreState) => state.error.error

export { getUser, getLoadingStatus, getErrorMessage }
