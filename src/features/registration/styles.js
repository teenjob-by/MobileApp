import { StyleSheet } from 'react-native';

import { colors } from 'common/theme/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowBack: {
    width: 15,
    paddingVertical: 20,
    paddingHorizontal: 33,
  },
  title: {
    marginTop: 40,
    marginBottom: 80,
    color: colors.navy,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 90,
  },
});
