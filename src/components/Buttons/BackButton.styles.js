import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: colors.dark,
  },
});
