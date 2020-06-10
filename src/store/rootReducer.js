import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import { setUser } from 'features/login/reducers';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['isLoggedIn', 'accessToken'],
};

export const rootReducer = combineReducers({ user: persistReducer(persistConfig, setUser) });
