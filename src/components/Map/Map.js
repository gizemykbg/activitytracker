import {loadOptions} from '@babel/core';
import React, {useState, useEffect} from 'react';
import {View, Text, Platform, findNodeHandle} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';

import styles from './Map.styles';
import findLocation from '../../hooks/findLocation';

const Map = () => {
  const position = findLocation();
  console.log(position, 'sdgfdhfgj');
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        minZoomLevel={15}
        region={{
          latitude: position?.coords.latitude || 37.8887395,
          longitude: position?.coords.longitude || 32.4843926,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          title="here"
          pinColor="red"
          coordinate={{
            latitude: position?.coords.latitude || 37.8887395,
            longitude: position?.coords.longitude || 32.4843926,
          }}
        />
      </MapView>
    </View>
  );
};

export default Map;
