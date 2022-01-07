import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../navigation/providers/AuthProvider';

import styles from './Logout.styles';

const Logout = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
        <Icon name="logout" size={38} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
