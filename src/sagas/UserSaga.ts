import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 USER_ACTIONS,
 IAllActions,
 setUser,
 toggleLoader,
 setUserInvitee,
 fetchUserAction,
} from '../actions/UserActions'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const UserSaga = function*() {
 yield all([takeEvery(USER_ACTIONS.FETCH_USER, fetchUser)])
 yield all([takeEvery(USER_ACTIONS.INVITE_USER, sendInvite)])
 yield all([takeEvery(USER_ACTIONS.FETCH_USER_INVITEE, fetchUserInvitee)])
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
 //  yield put(toggleLoader())
 yield put(setUser(saveUser.data))
}

const sendInvite = function*(action: any) {
 let user: any
 const userLocalStorage = localStorage.getItem('user')
 if (userLocalStorage) {
  user = JSON.parse(userLocalStorage)
 }

 console.log(userLocalStorage, 'user local')
 const { email } = action.payload
 const sendInvite: IAxiosResponse = yield call(() =>
  axios.post(`${API_ROOT}/api/contacts/sendInvite?access_token=${user.id}`, {
   email,
  })
 )

 if (sendInvite.status === 200) {
  console.log('success')
 }
}

const fetchUserInvitee = function*() {
 let user: any
 const userLocalStorage = localStorage.getItem('user')
 if (userLocalStorage) {
  user = JSON.parse(userLocalStorage)
 }
 console.log(user, 'user')

 const filter = { where: { userId: user.userId } }

 const saveUserInvitee: IAxiosResponse = yield call(() =>
  axios.get(
   `${API_ROOT}/api/contacts?filter=${user.userId}&access_token=${user.id}`,
   {}
  )
 )
 //  yield put(toggleLoader())
 console.log(saveUserInvitee, 'invitee')
 yield put(setUserInvitee(saveUserInvitee.data))
}
console.log(fetchUserInvitee, 'fetch')
export { UserSaga }
