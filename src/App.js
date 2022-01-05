import React from 'react';
import {SafeAreaView} from 'react-native';
import Providers from './navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Providers />
    </SafeAreaView>
  );
};

export default App;
