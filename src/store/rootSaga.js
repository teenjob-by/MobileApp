import { takeLatest, takeEvery } from 'redux-saga/effects';

import setUserSaga from 'features/login/sagas';
import registrationSaga from 'features/registration/sagas';
import { fetchJobsSaga, refreshJobsSaga } from 'features/main/sagas';

export default function* rootSaga() {
  yield takeLatest('LOG_IN', setUserSaga);
  yield takeLatest('REGISTRATION_USER', registrationSaga);
  yield takeEvery('FETCH_JOBS', fetchJobsSaga);
  yield takeLatest('REFRESH_JOBS', refreshJobsSaga);
}
