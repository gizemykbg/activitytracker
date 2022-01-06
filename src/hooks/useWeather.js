import {useState, useEffect} from 'react';
import axios from 'axios';

const useWeather = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const getWeather = async () => {
    const URL =
      'https://api.openweathermap.org/data/2.5/forecast?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&appid=d6d826b6374ec0b43595ba43122aab9e';
    try {
      const response = await axios.get(URL);
      setForecast(response.data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  useEffect(() => {
    getWeather();
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLongitude({longitude: position.coords.longitude});
      setLatitude({latitude: position.coords.latitude});
    }),
      () => {
        getWeather();
      };
  };
  useEffect(() => {
    getLocation();
  });
};

export default useWeather;
