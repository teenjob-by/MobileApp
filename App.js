import React from 'react';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryScreen from 'features/entry/screens/EntryScreen';
import IntermediateScreen from 'features/entry/screens/IntermediateScreen';
import LoginScreen from 'features/login/screens/LoginScreen';
import LoaderComponent from 'components/LoaderComponent';
import MainScreen from 'features/main';
import { persistor } from 'store';

const Stack = createStackNavigator();

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <PersistGate loading={<LoaderComponent />} persistor={persistor}>
      <NavigationContainer>
        {!isLoggedIn ? (
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name='ENTRY_SCREEN' component={EntryScreen} />
            <Stack.Screen name='INTERMEDIATE_SCREEN' component={IntermediateScreen} />
            <Stack.Screen name='LOGIN_SCREEN' component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name='MAIN_SCREEN' component={MainScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PersistGate>
  );
};

export default App;
