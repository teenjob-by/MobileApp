import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryScreen from 'features/entry/screens/EntryScreen';
import IntermediateScreen from 'features/entry/screens/IntermediateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name='EntryScreen' component={EntryScreen} />
          <Stack.Screen name='IntermediateScreen' component={IntermediateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
