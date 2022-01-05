import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    flex: 1,
    marginHorizontal: 23,
    justifyContent: 'center',
  },
  imgMain: {
    flex: 3,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: colors.dark,
  },
  buttonMain: {
    flex: 2,
  },
  buttonStyle: {
    backgroundColor: colors.lightLilac,
    tintColor: colors.lilac,
  },
});
