import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import Entrance from '../pages/auth/Entrance/Entrance';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Entrance"
        component={Entrance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
