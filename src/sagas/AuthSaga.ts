import { takeEvery, all, call, put } from 'redux-saga/effects'
import { AUTH_ACTIONS, IAllActions, doUserLogin } from '../actions/AuthActions'
import { setUser } from '../actions/UserActions'
import IAxiosResponse from '../types/AxiosResponse'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import { setLocalStorageUser } from '../utils/setLocalStorageUser'

const AuthSaga = function*() {
 //WATCHER SAGA
 yield all([takeEvery(AUTH_ACTIONS.DO_USER_REGISTRATION, doRegistration)])
 yield all([takeEvery(AUTH_ACTIONS.DO_USER_LOGIN, doLogin)])
}

const doRegistration = function*(action: any) {
 const { email, username, password } = action.payload

 const saveUserCredentialsResponse: IAxiosResponse = yield call(() =>
  axios.post(`${API_ROOT}/users`, {
   email,
   password,
   username,
  })
 )

 if (saveUserCredentialsResponse.status === 201) {
  yield put(doUserLogin(action.payload))
 }
}

const doLogin = function*(action: any) {
 const { email, password } = action.payload

 const doAuthenticationResponse: IAxiosResponse = yield call(() =>
  axios.post(`${API_ROOT}/authentication`, {
   email,
   password,
   strategy: 'local',
  })
 )

 if (doAuthenticationResponse.status === 201) {
  yield put(
   setUser({
    ...action.payload,
    id: doAuthenticationResponse.data.user.id,
    username: doAuthenticationResponse.data.user.username,
    token: doAuthenticationResponse.data.accessToken,
   })
  )
  const localStorageUser = {
   token: doAuthenticationResponse.data.accessToken,
   id: doAuthenticationResponse.data.user.id,
   email: doAuthenticationResponse.data.user.email,
   username: doAuthenticationResponse.data.user.username,
  }

  setLocalStorageUser(localStorageUser)
 }
}

export { AuthSaga }
