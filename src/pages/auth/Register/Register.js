import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Register.styles';
import {Input} from '../../../components';
import {Button} from '../../../components';
import {AuthContext} from '../../../providers/AuthProvider';

const Register = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>
      <Input
        placeholder="Email"
        onChangeText={userEmail => {
          setEmail(userEmail);
        }}
        value={email}
        keyboardType="email-address"
      />
      <Input
        placeholder="Name"
        // eslint-disable-next-line no-shadow
        onChangeText={name => {
          setName(name);
        }}
        value={name}
        keyboardType="name"
      />
      <Input
        placeholder="Surname"
        // eslint-disable-next-line no-shadow
        onChangeText={surname => {
          setSurname(surname);
        }}
        value={surname}
        keyboardType="surname"
      />
      <Input
        placeholder="Password"
        onChangeText={userPassword => {
          setPassword(userPassword);
        }}
        value={password}
        keyboardType="password"
      />
      <Button
        title="Sign Up"
        onPress={() => register(email, password, name, surname)}
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
