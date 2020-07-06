import { takeEvery, all, call, put, delay } from 'redux-saga/effects'
import {
 USER_ACTIONS,
 IAllActions,
 setUser,
 toggleLoader,
} from '../actions/UserActions'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const UserSaga = function*() {
 yield all([takeEvery(USER_ACTIONS.FETCH_USER, fetchUser)])
}

const fetchUser = function*() {
 let user: any
 const userLocalStorage = localStorage.getItem('user')
 if (userLocalStorage) {
  user = JSON.parse(userLocalStorage)
 }

 const saveUser: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/api/Accounts/${user.userId}?access_token=${user.id}`)
 )
 console.log(saveUser, 'user saga')

 yield put(toggleLoader())

 yield put(setUser(saveUser.data))
 console.log(saveUser.data, 'data from user saga ')
}

export { UserSaga }
