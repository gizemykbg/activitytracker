import {StyleSheet} from 'react-native';
import {colors, dimensionsHeight} from '../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: dimensionsHeight / 2,
    ...StyleSheet.absoluteFillObject,
  },
});
