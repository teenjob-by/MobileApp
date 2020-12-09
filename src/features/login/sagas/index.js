import { call, put } from 'redux-saga/effects';

import api from 'src/api';
import { logInSuccess, logInFailed } from 'features/login/actions';

export default function* setUserSaga({ payload }) {
  try {
    const data = yield call(api.login, payload);
    yield put(logInSuccess(data.access_token));
  } catch (error) {
    yield put(logInFailed());
  }
}
