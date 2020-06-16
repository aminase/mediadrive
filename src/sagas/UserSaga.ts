import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 USER_ACTIONS,
 IAllActions,
 setUserAction,
} from '../actions/UserActions'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const UserSaga = function*() {
 yield all([takeEvery(USER_ACTIONS.GET_USER, fetchUser)])
}

const fetchUser = function*(action: any) {
 const { id } = action.payload

 const saveUserProfile: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/users/${id}`)
 )

 yield put(setUserAction(saveUserProfile.data))
}

export { UserSaga }
