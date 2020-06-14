import { StoreState } from '../store'

const getUser = (state: StoreState) => state.registration.credentials

export { getUser }
