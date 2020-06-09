import { combineReducers } from 'redux';

import { setUser } from 'features/login/reducers';

export const rootReducer = combineReducers({ user: setUser });
