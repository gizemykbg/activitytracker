import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './BackButton.styles';

const BackButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Icon name="arrow-left-circle" size={24} color="black" />
        <Text style={styles.text}>Go Back</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;
