import { takeLatest } from 'redux-saga/effects';

import setUserSaga from 'features/login/sagas';

export default function* rootSaga() {
  yield takeLatest('LOG_IN', setUserSaga);
}
