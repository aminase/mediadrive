import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import RegistrationReducer from './reducers/RegistrationReducer'
import LoginReducer from './reducers/LoginReducer'
import ProfileReducer from './reducers/ProfileReducer'

const sagaMiddleware = createSagaMiddleware()

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
 registration: RegistrationReducer,
 login: LoginReducer,
 profile: ProfileReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type StoreState = ReturnType<typeof store['getState']>

export default store
