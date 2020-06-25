import { all } from 'redux-saga/effects'
import { AuthSaga } from './AuthSaga'
import { UserSaga } from './UserSaga'

export default function* rootSaga() {
 yield all([AuthSaga(), UserSaga()])
}
