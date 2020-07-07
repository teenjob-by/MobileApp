import { takeLatest, takeEvery } from 'redux-saga/effects';

import setUserSaga from 'features/login/sagas';
import { fetchJobsSaga, refreshJobsSaga } from 'features/main/sagas';

export default function* rootSaga() {
  yield takeLatest('LOG_IN', setUserSaga);
  yield takeEvery('FETCH_JOBS', fetchJobsSaga);
  yield takeLatest('REFRESH_JOBS', refreshJobsSaga);
}
