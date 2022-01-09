import {StyleSheet} from 'react-native';
import {colors, dimensionsHeight} from '../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    height: 480,
    ...StyleSheet.absoluteFillObject,
  },
});
