import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchList } from '../services/agent';
// import { takeEvery } from 'redux-saga';

function *fetchData(action) {
    try {
        const data = yield call(fetchList, action.id);
        yield put({type: 'FETCH_SUCCEEDED', data});
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error});
    }
}

export default function *watchFetchData() {
    yield takeEvery('FETCH_DATA', fetchData);
}