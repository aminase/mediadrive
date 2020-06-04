import { StoreState } from '../store'

const getUser = (state: StoreState) => state.login.user

export { getUser }
