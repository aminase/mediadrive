import { StoreState } from '../store'

const getUser = (state: StoreState) => state.login.credentials

export { getUser }
