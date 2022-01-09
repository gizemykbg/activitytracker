import {loadOptions} from '@babel/core';
import React, {useState, useEffect} from 'react';
import {View, Text, Platform} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {ToastAndroid} from 'react-native';
import {hasPermission} from '../../hooks/locationPermission';

import styles from './Map.styles';

const Map = () => {
  const [position, setPosition] = useState(null);

  const getLocation = async () => {
    const locationPermission = await hasPermission();
    if (!locationPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        setPosition(position);
        console.log(position);
      },
      error => {
        setPosition(null);
        ToastAndroid.show(
          "We couldn't fetch your location. Please check your device location service!",
          ToastAndroid.LONG,
        );
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
      },
    );
    return position;
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        minZoomLevel={15}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
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
