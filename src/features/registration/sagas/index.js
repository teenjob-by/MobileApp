import { call, put } from 'redux-saga/effects';

import api from 'src/api';
import { logInSuccess, logInFailed } from 'features/login/actions';

export default function* registrationSaga({ payload }) {
  try {
    const { data } = yield call(api.registration, payload);
    yield put(logInSuccess(data.access_token));
  } catch (error) {
    yield put(logInFailed());
  }
}
