import { StoreState } from '../store'

const getUser = (state: StoreState) => state.user.user
const getLoadingStatus = (state: StoreState) => state.user.loading

export { getUser, getLoadingStatus }
