import { createAction } from 'redux-actions';

export const setUser = createAction('LOG_IN');
export const logInSuccess = createAction('LOG_IN_SUCCEED');
export const logInFailed = createAction('LOG_IN_FAILED');
