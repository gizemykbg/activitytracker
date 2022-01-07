import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

import styles from './ActivityMap.styles';

const ActivityMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default ActivityMap;
