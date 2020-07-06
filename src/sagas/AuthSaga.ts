import { takeEvery, all, call, put } from 'redux-saga/effects'
import { AUTH_ACTIONS, IAllActions, doUserLogin } from '../actions/AuthActions'
import { setUser, fetchUserAction } from '../actions/UserActions'
import IAxiosResponse from '../types/AxiosResponse'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import { setLocalStorageUser } from '../utils/setLocalStorageUser'
import { useHistory } from 'react-router'
import { createDispatchHook } from 'react-redux'

const AuthSaga = function*() {
 //WATCHER SAGA
 yield all([takeEvery(AUTH_ACTIONS.DO_USER_REGISTRATION, doRegistration)])
 yield all([takeEvery(AUTH_ACTIONS.DO_USER_LOGIN, doLogin)])
}

const doRegistration = function*(action: any) {
 const { email, username, password, history } = action.payload

 const saveUserCredentialsResponse: IAxiosResponse = yield call(() =>
  axios.post(`${API_ROOT}/api/Accounts`, {
   email,
   password,
   username,
  })
 )
 if (saveUserCredentialsResponse.status === 200) {
  yield put(doUserLogin(action.payload))

  history.push('/upload')
 }
}

const doLogin = function*(action: any) {
 const { username, password, history } = action.payload

 const doAuthenticationResponse: IAxiosResponse = yield call(() =>
  axios.post(`${API_ROOT}/api/Accounts/login`, {
   username,
   password,
  })
 )

 if (doAuthenticationResponse.status === 200) {
  yield put(
   setUser({
    ...action.payload,
    id: doAuthenticationResponse.data.id,
    userId: doAuthenticationResponse.data.userId,
    username: doAuthenticationResponse.data.username,
   })
  )

  const localStorageUser = {
   id: doAuthenticationResponse.data.id,
   userId: doAuthenticationResponse.data.userId,
  }
  setLocalStorageUser(localStorageUser)

  history.push('/upload')
  yield put(fetchUserAction(action.payload))
 }
}

export { AuthSaga }
