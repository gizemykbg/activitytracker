import {StyleSheet} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import {colors} from '../../styles';

export default StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    paddingBottom: 5,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.dark,
  },
  contentView: {
    justifyContent: 'flex-end',
    marginBottom: 105,
  },
  buttonStyle: {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  items: {
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  flatList: {
    marginVertical: 1,
  },
  plusIcon: {
    color: colors.lightLilac,
    fontSize: 28,
    justifyContent: 'center',
  },
  list: {
    alignItems: 'center',
  },
  back: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  icon: {
    color: colors.lilac,
    padding: 5,
    marginTop: 8,
  },
  title: {
    color: colors.lilac,
  },
});
