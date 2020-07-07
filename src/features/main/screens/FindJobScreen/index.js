import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FindJobScreen from './FindJobScreen';
import JobDetailScreen from 'features/main/screens/JobDetailScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name='FIND_JOB_SCREEN' component={FindJobScreen} />
      <Stack.Screen name='JOB_DETAIL_SCREEN' component={JobDetailScreen} />
    </Stack.Navigator>
  );
};
