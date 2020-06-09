import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryScreen from 'features/entry/screens/EntryScreen';
import IntermediateScreen from 'features/entry/screens/IntermediateScreen';
import LoginScreen from 'features/login/screens/LoginScreen';
import store from 'store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name='ENTRY_SCREEN' component={EntryScreen} />
          <Stack.Screen name='INTERMEDIATE_SCREEN' component={IntermediateScreen} />
          <Stack.Screen name='LOGIN_SCREEN' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
