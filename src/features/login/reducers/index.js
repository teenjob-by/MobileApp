import { handleActions } from 'redux-actions';
import { logInFailed, logInSuccess } from 'features/login/actions';

export const initialState = {
  isLoggedIn: false,
};

export default handleActions(
  {
    [logInSuccess]: (state, { payload }) => ({
      ...state,
      accessToken: payload,
      isLoggedIn: true,
      logInError: false,
    }),
    [logInFailed]: state => ({
      ...state,
      logInError: true,
    }),
  },
  initialState,
);
