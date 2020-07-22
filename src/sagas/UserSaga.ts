import { takeEvery, all, call, put, delay } from 'redux-saga/effects'
import {
 USER_ACTIONS,
 IAllActions,
 setUser,
 toggleLoader,
 setUserContacts,
 fetchUserAction,
 setUserInvitation,
} from '../actions/UserActions'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const UserSaga = function*() {
 yield all([takeEvery(USER_ACTIONS.FETCH_USER, fetchUser)])
 yield all([takeEvery(USER_ACTIONS.USER_INVITATION, sendInvite)])
 yield all([takeEvery(USER_ACTIONS.FETCH_USER_CONTACTS, getUserContacts)])
 yield all([
  takeEvery(USER_ACTIONS.FETCH_USER_INVITATION, fetchUserInvitations),
 ])
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

const getUserContacts = function*() {
 let user: any
 const userLocalStorage = localStorage.getItem('user')
 if (userLocalStorage) {
  user = JSON.parse(userLocalStorage)
 }
 const filter = encodeURIComponent(
  JSON.stringify({ where: { userId: user.userId } })
 )
 const saveUserContacts: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/api/contacts?filter=${filter}&access_token=${user.id}`)
 )

 yield put(setUserContacts(saveUserContacts.data))
}

const fetchUserInvitations = function*() {
 let user: any
 const userLocalStorage = localStorage.getItem('user')
 if (userLocalStorage) {
  user = JSON.parse(userLocalStorage)
 }
 const filter = encodeURIComponent(
  JSON.stringify({ where: { userId: user.userId } })
 )
 const saveUserInvitation: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/api/invites?filter=${filter}&access_token=${user.id}`)
 )
 //  yield put(toggleLoader())

 yield put(setUserInvitation(saveUserInvitation.data))
}
export { UserSaga }
