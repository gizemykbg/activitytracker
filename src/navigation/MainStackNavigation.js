import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import Home from '../pages/Home';
import Logout from '../components/Logout';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
