import {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {ToastAndroid} from 'react-native';

const findLocation = () => {
  const [position, setPosition] = useState(null);

  const getLocation = async () => {
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
  };
  useEffect(() => {
    async function getData() {
      getLocation();
    }
    getData();
  }, []);
  return position;
};
export default findLocation;
