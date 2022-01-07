import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lilac,
    marginBottom: 15,
    width: '100%',
    paddingVertical: 12,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
