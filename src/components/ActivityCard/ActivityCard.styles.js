import {StyleSheet} from 'react-native';
import {colors, dimensionsHeight} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    height: dimensionsHeight / 4,
    alignItems: 'center',
    borderRadius: 10,
  },
  btn_container: {
    alignItems: 'center',
  },
  start_btn: {
    backgroundColor: colors.orange,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info_container: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.orange,
  },
  info_item: {
    padding: 3,
    margin: 8,
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
});
