import { call, put, takeEvery, take } from 'redux-saga/effects';
import { fetchList, addData, addItem } from '../services/agent';
// import { takeEvery } from 'redux-saga';

function *fetchData(action) {
    const data = yield call(fetchList, action.id);
    yield put({type: 'FETCH_SUCCEEDED', payload: { list: data }});
}

function *putData(action) {
    const data = yield call(addData, action.data);
    yield put({type: 'FETCH_DATA'});
}

function *putItem(action) {
	const data = yield call(addItem, action.data);
    yield put({type: 'FETCH_DATA'});
}

export default function *watchFetchData() {
    yield takeEvery('FETCH_DATA', fetchData);
    yield takeEvery('PUT_DATA', putData);
    yield takeEvery('PUT_ITEM', putItem);
}