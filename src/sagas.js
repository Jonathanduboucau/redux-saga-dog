import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios'; 

// Watcher Saga: Watches for acitons dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest('API_CALL_REQUEST', workerSaga);
} 

// Function that makes the api request and returns a Promise for response
function fetchImage() {
    return axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/image/random'
    });
}

// Worker Saga: Makes the api call when watcher saga see action
function* workerSaga() {
    try {
        const response = yield call(fetchImage);
        const image = response.data.message;
        console.log(response.data.message);
        // Dispatch a success action to the store with the new image
        yield put({ type: 'API_CALL_SUCCESS', image });
    } catch (error) {
        // Dispatch a faillure action to the store with error
        yield put({ type: 'API_CALL_FAILLURE', error });
    }
}