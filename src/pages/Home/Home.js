import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../navigation/providers/AuthProvider';
import styles from './Home.styles';

const Home = ({navigation, route}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Hello</Text>
      <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
        <Text style={styles.userBtnTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
