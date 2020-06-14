import { StoreState } from '../store'
import { Store } from 'redux'

const getUser = (state: StoreState) => state.registration.credentials
const getAuth = (state: StoreState) => state.auth.credentials
export { getUser, getAuth }
