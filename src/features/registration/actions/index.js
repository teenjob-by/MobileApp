import { createAction } from 'redux-actions';

export const registrationUser = createAction('REGISTRATION_USER');
export const registrationSuccess = createAction('REGISTRATION_SUCCESS');
export const registrationFailed = createAction('REGISTRATION_FAILED');
