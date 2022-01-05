import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import Entrance from '../pages/auth/Entrance/Entrance';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Entrance" component={Entrance} />
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SiignUp" component={Register} />
    </Stack.Navigator>
  );
}
