import React from 'react';
import { useSelector } from 'react-redux';

import LoginScreen from './LoginScreen';

export default ({ navigation }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return <LoginScreen navigation={navigation} isLoggedIn={isLoggedIn} />;
};
