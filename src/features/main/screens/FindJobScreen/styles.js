import { colors } from 'src/common/theme/constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.navy,
    marginLeft: 32,
    marginTop: 20,
  },
});

export default styles;
