import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Screens
import Home from '../pages/Home';
import {colors} from '../styles';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      headerMode="none"
      //  screenOptions={({ route }) => ({
      //     tabBarIcon: ({ isFocus }) => {
      //         const iconName;
      //         const color = isFocus ? colors.orange : colors.purple;
      //         if (route.name === 'Home') {
      //             iconName = isFocus ? "home" :"home";
      //         } else if (route.name === 'Add') {
      //             iconName = isFocus ? "plus" : "plus";
      //         } else if (route.name === 'List') {
      //             iconName = isFocus ? "list" : "list";
      //         }
      //         return (
      //                 <Icon name={ iconName } style={styles.icon}/>
      //         )
      //     },
      // })}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen /> add activity options={{
                    tabBarIcon: (props) => (
                        <Icon name="plus" style={styles.icon}/>
                      ),
                }} */}
      {/* <Tab.Screen /> user list */}
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  tabbar: {
    width: 45,
    height: 45,
    borderRadius: 15,
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
    color: colors.purple,
    fontSize: 32,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
