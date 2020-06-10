import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryScreen from 'features/entry/screens/EntryScreen';
import IntermediateScreen from 'features/entry/screens/IntermediateScreen';
import LoginScreen from 'features/login/screens/LoginScreen';
import MainScreen from 'features/main';
import { store, persistor } from 'store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name='ENTRY_SCREEN' component={EntryScreen} />
            <Stack.Screen name='INTERMEDIATE_SCREEN' component={IntermediateScreen} />
            <Stack.Screen name='LOGIN_SCREEN' component={LoginScreen} />
            <Stack.Screen name='MAIN_SCREEN' component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
