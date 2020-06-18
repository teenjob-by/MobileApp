import { call, put } from 'redux-saga/effects';

import api from 'src/api';

function* fetchJobsSaga(action) {
  try {
    const { data } = yield call(api.getJobs, action.payload);
    yield put({ type: 'FETCH_JOB_SUCCESS', payload: data });
  } catch (e) {
    console.warn(e);
  }
}

function* refreshJobsSaga(action) {
  try {
    yield put({ type: 'REFRESH_JOBS_REQUEST' });
    const { data } = yield call(api.getJobs, action.payload);
    yield put({ type: 'FETCH_JOB_SUCCESS', payload: data });
  } catch (e) {
    console.warn(e);
  }
}

export { fetchJobsSaga, refreshJobsSaga };
