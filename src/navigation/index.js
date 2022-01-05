import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStackNavigation from './AuthStackNavigation';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Auth" component={AuthStackNavigation} />
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
