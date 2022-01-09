import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './Activity.styles';
import ActivityCard from '../../../components/ActivityCard';
import Map from '../../../components/Map/Map';
import database from '@react-native-firebase/database';

const Activity = () => {
  return (
    <View style={styles.container}>
      <Map />
      <ActivityCard />
    </View>
  );
};

export default Activity;
