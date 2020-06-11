import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 MEDIA_ACTIONS,
 doSignUpUser,
 IAllActions,
 setSignUpUser,
} from '../actions/LoginActions'
import IAxiosResponse from '../types/AxiosResponse'
import axios from 'axios'
import { API_ROOT } from '../constants/index'

const LoginSaga = function*() {
 //WATCHER SAGA
 yield all([takeEvery(MEDIA_ACTIONS.DO_SIGN_UP_USER, doSignUp)])
}

const doSignUp = function*(action: any) {
 const { user } = action.payload

 const saveUserCredentials: IAxiosResponse = yield call(() =>
  axios.post(`${API_ROOT}/${user}`)
 )
 //  const saveEmailResponse: IAxiosResponse = yield call(() =>
 //   axios.post(`${API_ROOT}/api/v0/user/addEmail/${email}`)
 //  )
 //  const savePasswordResponse: IAxiosResponse = yield call(() =>
 //   axios.post(`${API_ROOT}/api/v0/keys/createPassword/${password}`)
 //  )

 //WORKER SAGA
 if (saveUserCredentials) {
  yield put(setSignUpUser(action.payload))
  // uraditi redirekciju
  // yield put(push('/'))
 }

 //setting store variable userLoginCredentialsData
 //   yield put(doSignUpUser(userCredentialsResponse.data))
}

export { LoginSaga }
