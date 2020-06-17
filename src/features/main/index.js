import React from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FindJobScreen from 'src/features/main/screens/FindJobScreen';
import SettingsScreen from 'src/features/main/screens/SettingsScreen';
import { styles, tabBarOptions } from './styles';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <Tabs.Navigator initialRouteName={'FIND_JOB_SCREEN'} tabBarOptions={tabBarOptions}>
        <Tabs.Screen
          options={{
            tabBarLabel: 'Поиск',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name='search' color={color} size={size} />
            ),
          }}
          name='FIND_JOB_SCREEN'
          component={FindJobScreen}
        />
        <Tabs.Screen
          options={{
            tabBarLabel: 'Настройки',
            tabBarIcon: ({ color, size }) => <FontAwesome5 name='cog' color={color} size={size} />,
          }}
          name='SETTINGS_SCREEN'
          component={SettingsScreen}
        />
      </Tabs.Navigator>
    </>
  );
};
