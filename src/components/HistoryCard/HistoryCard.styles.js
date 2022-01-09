import {StyleSheet} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import {colors, dimensionsHeight} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: 'center',
    height: dimensionsHeight / 6,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightLilac,
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info_container: {
    flexDirection: 'row',
    margin: 3,
    padding: 13,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.orange,
  },
  info_item: {
    padding: 3,
    margin: 5,
    alignItems: 'center',
  },
  info: {
    color: colors.purple,
    fontSize: 14,
  },
  info_title: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 8,
    padding: 3,
  },
});
