import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen

const Stack = createNativeStackNavigator();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen />
      <Stack.Screen />
      <Stack.Screen />
    </Stack.Navigator>
  );
}
