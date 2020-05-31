import { all } from 'redux-saga/effects';


export const loadSaga = () => {
    console.log('Sagas!')
}

export default function* rootSaga() {
    yield all([
        loadSaga(),
    ])
};