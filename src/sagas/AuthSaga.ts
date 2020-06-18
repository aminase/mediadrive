import { takeEvery, all, call, put } from 'redux-saga/effects'
import { AUTH_ACTIONS, IAllActions, doUserLogin } from '../actions/AuthActions'
import { setUserAction } from '../actions/UserActions'
import IAxiosResponse from '../types/AxiosResponse'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import { setTokenAction } from '../utils/setTokenAction'

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
   setUserAction({
    ...action.payload,
    id: doAuthenticationResponse.data.user.id,
    username: doAuthenticationResponse.data.user.username,
    token: doAuthenticationResponse.data.accessToken,
   })
  )
  console.log(doAuthenticationResponse, 'token auth auth ')

  setTokenAction(doAuthenticationResponse.data.accessToken)
 }
}

export { AuthSaga }
