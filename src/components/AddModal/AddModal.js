import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import {colors} from '../../styles';
import styles from './AddModal.styles';

const DATA = [
  {
    id: 1,
    name: 'run',
    title: 'New',
    color: colors.lilac,
    navigationName: 'Activity',
  },
  {
    id: 2,
    name: 'history',
    title: 'History',
    color: colors.lilac,
    navigationName: 'History',
  },
];

const AddModal = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.items}
        onPress={() => {
          setSelectedId(item.id);
          setModalVisible(false);
          navigation.navigate('Activities', {screen: item.navigationName}); //
        }}>
        <Icon name={item.name} style={styles.icon} size={35} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[
          styles.buttonStyle,
          {backgroundColor: modalVisible ? colors.orange : colors.purple},
        ]}>
        <Icon name="plus" style={styles.plusIcon} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Modal
          backdropOpacity={0.5}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}>
          <View style={styles.content}>
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(false);
              }}>
              <View style={styles.back}>
                <Icon name="close-circle-outline" size={30} color="red" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.list}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal={false}
                numColumns={2}
                style={styles.flatList}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AddModal;
