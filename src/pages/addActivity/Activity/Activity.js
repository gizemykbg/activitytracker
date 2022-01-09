import React from 'react';
import {View, Text} from 'react-native';
import styles from './Activity.styles';
import ActivityCard from '../../../components/ActivityCard';
import Map from '../../../components/Map/Map';

const Activity = () => {
  return (
    <View style={styles.container}>
      <Map />
      <ActivityCard />
    </View>
  );
};

export default Activity;
