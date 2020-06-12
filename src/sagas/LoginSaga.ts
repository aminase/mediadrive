import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 MEDIA_ACTIONS,
 IAllActions,
 setUserAction,
 doUserLogin,
 setUserLogin,
} from '../actions/LoginActions'
import IAxiosResponse from '../types/AxiosResponse'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import { push } from 'react-router-redux'
import { setToken } from '../utils'

const LoginSaga = function*() {
 //WATCHER SAGA
 yield all([takeEvery(MEDIA_ACTIONS.DO_USER_REGISTRATION, doRegistration)])
 yield all([takeEvery(MEDIA_ACTIONS.DO_USER_LOGIN, doLogin)])
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
  yield put(setUserAction(action.payload))

  setToken(doAuthenticationResponse.data.accessToken)

  // uraditi redirekciju
  // yield put(push('/'));
 }
}

export { LoginSaga }
