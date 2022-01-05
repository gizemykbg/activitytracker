import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginVertical: 10,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 13,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.light,
  },
});
