import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Screens
import Home from '../pages/Home';
import UserList from '../pages/UserList';

import {colors} from '../styles';
import AddModal from '../components/AddModal';

const Tab = createBottomTabNavigator();

const MyModalBackgroundScreen = () => {
  return null;
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      style={styles.tabbar}
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={MyModalBackgroundScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="plus" size={30} style={styles.icon} />
          ),
          tabBarButton: () => {
            return <AddModal />;
          },
        }}
      />
      <Tab.Screen
        name="userlist"
        component={UserList}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" size={30} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  tabbar: {
    width: 45,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 14,
  },
  icon: {
    color: colors.lilac,
    fontSize: 32,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerStyle: {
    height: 120,
  },
});
