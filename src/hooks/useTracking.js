import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {defaultLocation} from '../utils';
import {getDistanceFromLatLonInKm} from '../utils';

const useTracking = isActive => {
  const [location, setLocation] = useState(defaultLocation);
  const [history, setHistory] = useState([]);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }
      Geolocation.getCurrentPosition(position => {
        setLongitude({longitude: position.coords.longitude});
        setLatitude({latitude: position.coords.latitude});
      });
    };
};
