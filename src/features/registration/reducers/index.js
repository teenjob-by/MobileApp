import { handleActions } from 'redux-actions';
import { registrationFailed, registrationSuccess } from 'features/registration/actions';

export const initialState = {
  isLoggedIn: false,
};

export default handleActions(
  {
    [registrationSuccess]: (state, { payload }) => ({
      ...state,
      accessToken: payload,
      isLoggedIn: true,
      logInError: false,
    }),
    [registrationFailed]: state => ({
      ...state,
      logInError: true,
    }),
  },
  initialState,
);
