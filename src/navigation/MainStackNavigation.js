import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import AddTopTabNavigation from './AddTopTabNavigation';

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Activities"
        component={AddTopTabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
