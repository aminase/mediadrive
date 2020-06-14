import { all } from 'redux-saga/effects'
import { AuthSaga } from './AuthSaga'

export default function* rootSaga() {
 yield all([AuthSaga()])
}
