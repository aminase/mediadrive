import IProfile from '../types/UserProfile'

enum PROFILE_ACTIONS {
 FETCH_PROFILE = 'PROFILE_ACTIONS::FETCH_PROFILE',
 SET_PROFILE = 'PROFILE_ACTIONS::SET_PROFILE',
}

interface IFetchProfile {
 type: typeof PROFILE_ACTIONS.FETCH_PROFILE
}

const fetchProfile = () => {
 return {
  type: PROFILE_ACTIONS.FETCH_PROFILE,
 }
}

interface ISetProfile {
 type: typeof PROFILE_ACTIONS.SET_PROFILE
 payload: IProfile
}

const setProfile = (profile: IProfile) => {
 return {
  type: PROFILE_ACTIONS.SET_PROFILE,
  payload: profile,
 }
}

export type IAllActions = IFetchProfile | ISetProfile
export { fetchProfile, setProfile, PROFILE_ACTIONS }
