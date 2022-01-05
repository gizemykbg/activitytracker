import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.styles';

const Input = ({placeholder, onChangeText, value, keyboardType}) => {
  return (
    <TextInput
      style={styles.textinput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
    />
  );
};
export default Input;
