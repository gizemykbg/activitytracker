import {useState, useEffect} from 'react';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';
import {ToastAndroid} from 'react-native';

const findWeather = () => {
  const [position, setPosition] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

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
    return position;
  };

  const getWeather = async () => {
    console.log(position, 'position');
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=d6d826b6374ec0b43595ba43122aab9e`;
    console.log(URL);
    try {
      const response = await axios.get(URL);
      setForecast(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  useEffect(() => {
    async function getData() {
      getLocation();
      getWeather();
      console.log('safdg');
    }
    getData();
  }, []);
  // useEffect(() => {}, [forecast]);
  return forecast;
};

export default findWeather;
