import { takeEvery, all, call, put } from 'redux-saga/effects'
import {
 USER_ACTIONS,
 IAllActions,
 setUserAction,
 setUserTokenAction,
} from '../actions/UserActions'
import axios from 'axios'
import { API_ROOT } from '../constants/index'
import IAxiosResponse from '../types/AxiosResponse'

const UserSaga = function*() {
 yield all([takeEvery(USER_ACTIONS.GET_USER, fetchUser)])
 //yield all([takeEvery(USER_ACTIONS.GET_USER_TOKEN, fetchToken)])
}

const fetchUser = function*(action: any) {
 const { id } = action.payload

 const saveUserProfile: IAxiosResponse = yield call(() =>
  axios.get(`${API_ROOT}/users/${id}`)
 )

 yield put(setUserAction(saveUserProfile.data))
 console.log(saveUserProfile.data, 'data')
}

//fetchToken saga
// const fetchToken = function*(action: any) {
//     const { token } = action.payload

//     const saveUserTokenResponse: IAxiosResponse = yield call(() =>
//     axios.get(`${API_ROOT}/users/${token}`) //add exact API for fetch token
//     )

//        // setTokenAction(saveUserTokenResponse.data.accessToken)
//        }
//    // yield put(setUserAction(saveUserToken.data))   //or setUserAction if user object should be expanded
//    }

export { UserSaga }
