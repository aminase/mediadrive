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
  yield all([takeEvery(MEDIA_ACTIONS.DO_SIGN_UP_USER, doSignUp)])
}

const doSignUp = function*(action: any) {
  const { nickname, email, password } = action.payload

  const saveNicknameResponse: IAxiosResponse = yield call(() =>
    axios.post(`${API_ROOT}/api/v0/user/changeNickname/${nickname}`)
  )
  const saveEmailResponse: IAxiosResponse = yield call(() =>
    axios.post(`${API_ROOT}/api/v0/user/addEmail/${email}`)
  )
  const savePasswordResponse: IAxiosResponse = yield call(() =>
    axios.post(`${API_ROOT}/api/v0/keys/createPassword/${password}`)
  )

  if (saveNicknameResponse && saveEmailResponse && savePasswordResponse) {
    yield put(setSignUpUser(action.payload))
    // uradi redirekciju
    // yield put(push('/'))
  }

  //setting store variable userLoginCredentialsData
  //   yield put(doSignUpUser(userCredentialsResponse.data))
}

export { LoginSaga }
