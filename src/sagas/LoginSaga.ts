import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
  MEDIA_ACTIONS,
  doSignUpUser,
  IAllActions,
} from '../actions/LoginActions'
import IAxiosResponse from '../types/AxiosResponse'
import axios from 'axios'
import { API_ROOT } from '../constants/index'

const LoginSaga = function*() {
  yield all([takeEvery(MEDIA_ACTIONS.DO_SIGN_UP_USER, setSignUpCredentials)])
}
const setSignUpCredentials = function*(action: any) {
  const { nickname, email, password } = action.payload

  const userCredentialsResponse: IAxiosResponse = yield call(() => [
    axios.post(`${API_ROOT}/api/v0/user/changeNickname/${nickname}`),
    axios.post(`${API_ROOT}/api/v0/user/addEmail/${email}`),
    axios.post(`${API_ROOT}/api/v0/keys/createPassword/${password}`),
  ])
  console.log(action.payload, 'response')

  //setting store variable userLoginCredentialsData
  yield put(doSignUpUser(userCredentialsResponse.data))
}

export { LoginSaga }
