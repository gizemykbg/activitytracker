import {StyleSheet} from 'react-native';

import {colors} from '../../styles';

export default StyleSheet.create({
  textinput: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.purple,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.dark,
    fontWeight: '300',
    marginBottom: 20,
    shadowColor: colors.dark,
    tintColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.45,
    elevation: 8,
  },
});
