import { StoreState } from '../store'

const getUser = (state: StoreState) => state.registration.credentials
const getProfile = (state: StoreState) => state.profile.profile

export { getUser, getProfile }
