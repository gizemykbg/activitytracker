import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './Entrance.styles';
// import { Button } from '../../components'

const Entrance = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imageMain}>
          <Image
            source={require('../../assets/welcome.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.text}>Welcome to MoveStory </Text>
        <View style={styles.buttonMain}>
          <Button
            title="Sign in"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Register"
            style={styles.style}
            textStyle={styles.textStyle}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

export default Entrance;
