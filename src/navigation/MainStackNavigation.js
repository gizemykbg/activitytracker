import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
