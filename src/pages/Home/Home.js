import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import Logout from '../../components/Logout';

import WeatherBox from '../../components/WeatherBox';
import useWeather from '../../hooks/useWeather';
import {AuthContext} from '../../navigation/providers/AuthProvider';
import {colors} from '../../styles';
import styles from './Home.styles';

const Home = ({navigation, route}) => {
  // const {forecast} = useWeather();

  return (
    <View>
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
      <Text>Hello</Text>
      {/*<WeatherBox /> location={forecast.name}  item={forecast} */}
    </View>
  );
};

export default Home;
