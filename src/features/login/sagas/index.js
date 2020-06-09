import { call, put } from 'redux-saga/effects';

import api from 'src/api';

export default function* setUserSaga(action) {
  try {
    const { data } = yield call(api.login, action.payload);
    yield put({ type: 'LOG_IN_SUCCEED', payload: data.access_token });
  } catch {}
}
