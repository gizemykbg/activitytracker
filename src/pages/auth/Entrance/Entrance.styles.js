import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    flex: 3,
    marginHorizontal: 18,
    justifyContent: 'center',
  },
  imgMain: {},
  img: {
    width: '100%',
    height: '60%',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: colors.dark,
  },
  buttonMain: {},
  buttonStyle: {
    backgroundColor: colors.lightLilac,
    tintColor: colors.lilac,
  },
});
