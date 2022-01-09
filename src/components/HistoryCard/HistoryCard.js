import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './HistoryCard.styles';

const HistoryCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>Activity History</Text>

      <View style={styles.info_container}>
        <Image
          source={{uri: 'https://i.stack.imgur.com/ddX9U.png'}}
          style={styles.img}
        />
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

export default HistoryCard;
