import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../providers/AuthProvider';

import AuthStackNavigation from './AuthStackNavigation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  // eslint-disable-next-line no-shadow
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        {user ? (
          <Stack.Screen />
        ) : (
          <Stack.Screen name="Auth" component={AuthStackNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
