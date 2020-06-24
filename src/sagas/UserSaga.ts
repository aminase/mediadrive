import { takeEvery, all, call, put } from 'redux-saga/effects'
import { USER_ACTIONS, IAllActions, setUser } from '../actions/UserActions'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'
import { setLocalStorageUser } from '../utils/setLocalStorageUser'

const UserSaga = function*() {
 yield all([takeEvery(USER_ACTIONS.FETCH_USER, fetchUser)])
}

const fetchUser = function*(action: any) {
 const { id } = action.payload

 const saveUser: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/users/${id}`)
 )

 yield put(setUser(saveUser.data))
}

export { UserSaga }
