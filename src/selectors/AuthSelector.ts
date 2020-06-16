import { StoreState } from '../store'

const getUser = (state: StoreState) => state.user.user

export { getUser }
