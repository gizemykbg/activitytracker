import React, {useRef, useState} from 'react';
import {View, Text, Platform} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import GeoLocation from 'react-native-geolocation-service';
import styles from './ActivityCard.styles';
import {hasPermission} from '../../hooks/locationPermission';

const ActivityCard = ({item}) => {
  const watchId = useRef(null);
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
    console.log('hello');
  }
  return (
    <View style={styles.container}>
      <View style={styles.btn_container}>
        <Avatar
          size={60}
          rounded
          title={active ? 'Stop' : 'Start'}
          onPress={handleClick}
          activeOpacity={0.8}
          containerStyle={styles.start_btn}
          titleStyle={styles.title}
        />
      </View>
      <Text>Activity info</Text>
      <View style={styles.info_container}>
        <View style={styles.info_item}>
          <Text style={styles.info_title}>Date</Text>
          <Text style={styles.info}>0.00</Text>
        </View>
        <View style={styles.info_item}>
          <Text style={styles.info_title}>Distance</Text>
          <Text style={styles.info}>0.00</Text>
        </View>
        <View style={styles.info_item}>
          <Text style={styles.info_title}>Time</Text>
          <Text style={styles.info}>0.00</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;
