import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.lilac,
    borderWidth: 0,
    borderRadius: 20,
  },
  time: {
    fontSize: 38,
    color: colors.lightLilac,
  },
  notes: {
    fontSize: 18,
    color: colors.lightLilac,
    textTransform: 'capitalize',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
