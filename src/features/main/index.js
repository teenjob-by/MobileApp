import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FindJobScreen from 'src/features/main/screens/FindJobScreen';
import SettingsScreen from 'src/features/main/screens/SettingsScreen';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator initialRouteName={'FIND_JOB_SCREEN'}>
      <Tabs.Screen
        options={{ tabBarLabel: 'find' }}
        name='FIND_JOB_SCREEN'
        component={FindJobScreen}
      />
      <Tabs.Screen
        options={{ tabBarLabel: 'settings' }}
        name='SETTINGS_SCREEN'
        component={SettingsScreen}
      />
    </Tabs.Navigator>
  );
};
