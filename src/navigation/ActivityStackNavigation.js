import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import History from '../pages/addActivity/History';
import Activity from '../pages/addActivity/Activity';

const Stack = createNativeStackNavigator();

export default function ActivityStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
