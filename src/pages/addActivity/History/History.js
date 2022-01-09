import React from 'react';
import {View, Text, FlatList} from 'react-native';
import HistoryCard from '../../../components/HistoryCard';
import {DATA} from '../../../services/DummyData';

const History = () => {
  // const renderItem = ({item}) => <HistoryCard item={item} />;
  return (
    <View>
      <Text>ısauhdfvdailşöşilfdvov ujthrhjğoskmvfoıjpterjhtıjg</Text>
      <HistoryCard />
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};

export default History;
