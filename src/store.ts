import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import UserReducer from './reducers/UserReducer'
import ErrorReducer from './reducers/ErrorReducer'

const sagaMiddleware = createSagaMiddleware()

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
 user: UserReducer,
 authError: ErrorReducer,
})

declare global {
 interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
 }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
 rootReducer,
 composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export type StoreState = ReturnType<typeof store['getState']>

export default store
