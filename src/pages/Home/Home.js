import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import WeatherBox from '../../components/WeatherBox';
import useWeather from '../../hooks/useWeather';
import {AuthContext} from '../../navigation/providers/AuthProvider';
import styles from './Home.styles';

const Home = ({navigation, route}) => {
  const {logout} = useContext(AuthContext);
  const {forecast} = useWeather();
  return (
    <View>
      <Text>Hello</Text>
      <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
        <Text style={styles.userBtnTxt}>Logout</Text>
      </TouchableOpacity>
      <WeatherBox item={forecast} location={forecast.city.name} />
    </View>
  );
};

export default Home;
