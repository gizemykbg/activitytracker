import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import database from '@react-native-firebase/database';

import Map from '../../components/Map';
import Logout from '../../components/Logout';

import findWeather from '../../hooks/findWeather';
import WeatherBox from '../../components/WeatherBox';
import {colors} from '../../styles';
import styles from './Home.styles';

const Home = ({navigation, route}) => {
  const forecast = findWeather();
  console.log(forecast);

  return (
    <View style={styles.container}>
      <Header
        backgroundColor={colors.lilac}
        leftComponent={{text: 'logo'}}
        centerComponent={{text: 'Home', style: styles.heading}}
        rightComponent={
          <View style={styles.headerRight}>
            <Logout />
          </View>
        }
      />
      <Map />
      {/* <WeatherBox item={forecast} /> */}
    </View>
  );
};

export default Home;
