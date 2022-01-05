import React, {useState, useContext} from 'react';
import {Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {AuthContext} from '../../../providers/AuthProvider';
import {Button, Input} from '../../../components';
import styles from './Login.styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        // logo
        style={styles.logo}
      />
      <Text style={styles.text}>RN TrackerStory</Text>
      <Input
        placeholder="Email"
        onChangeText={userEmail => {
          setEmail(userEmail);
        }}
        value={email}
        keyboardType="email-address"
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
        title="SignIn"
        onPress={() => {
          login(email, password);
        }}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
