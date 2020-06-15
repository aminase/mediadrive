import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 PROFILE_ACTIONS,
 IAllActions,
 setProfile,
} from '../actions/ProfileActions'

import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const ProfileSaga = function*() {
 yield all([takeEvery(PROFILE_ACTIONS.FETCH_PROFILE, makeProfile)])
}

const makeProfile = function*(action: any) {
 const { id, username, email } = action.payload

 const saveUserProfile: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/users/${id}`)
 )
 console.log(action, 'id')

 yield put(setProfile(saveUserProfile.data))
 console.log(saveUserProfile, 'id')
}

export { ProfileSaga }
