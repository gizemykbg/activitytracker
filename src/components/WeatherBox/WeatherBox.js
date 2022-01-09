import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './WeatherBox.styles';

const WeatherBox = ({item}) => {
  let time;
  var date = new Date(item.dt * 1000);
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();
  time = hours + ':' + minutes.substring(-2);
  return (
    <View style={styles.card}>
      <Text>Hellooo</Text>
      <Text style={styles.notes}>{item.country}</Text>
      <Text style={styles.notes}>{item.name}</Text>
      <View style={styles.inner_container}>
        {/* <Image
          style={styles.image}
          source={{
            uri:
              'https://openweathermap.org/img/w/' +
              item.weather[0].icon +
              '.png',
          }}
        /> */}
        <Text style={styles.time}>{time}</Text>
      </View>
      <View tyle={styles.info}>
        <Text style={styles.notes}>{item.weather[0].description.main}</Text>
        <Text style={styles.notes}>{item.weather[0].description}</Text>
        <Text style={styles.notes}>
          {Math.round(item.main.temp * 10) / 10};
        </Text>
        <Text style={styles.notes}>{item.main.humidity};</Text>
      </View>
    </View>
  );
};

export default WeatherBox;
//detail ??
