import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Screen
import History from '../pages/addActivity/History';
import Activity from '../pages/addActivity/Activity';

const Tab = createMaterialTopTabNavigator();

export default function AddTopTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Activity" component={Activity} options={{}} />
      <Tab.Screen name="History" component={History} options={{}} />
    </Tab.Navigator>
  );
}
