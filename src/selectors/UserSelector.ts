import { StoreState } from '../store'

const getUser = (state: StoreState) => state.user.user
const getLoadingStatus = (state: StoreState) => state.user.loading
const getError = (state: StoreState) => state.user.error

export { getUser, getLoadingStatus, getError }
