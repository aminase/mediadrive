import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 PROFILE_ACTIONS,
 IAllActions,
 setProfile,
} from '../actions/ProfileActions'

import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const UserSaga = function*() {
 yield all([takeEvery(PROFILE_ACTIONS.FETCH_PROFILE, fetchProfile)])
}

const fetchProfile = function*(action: any) {
 const { id, username, email } = action.payload

 console.log(id, 'id')
 const saveUserProfile: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/users/${id}`)
 )

 yield put(setProfile(saveUserProfile.data))
}

export { UserSaga }
