import { StyleSheet } from 'react-native';
import { colors } from 'common/theme/constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    paddingVertical: 75,
  },
  container: {
    alignSelf: 'stretch',
  },
  arrowBack: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    padding: 15,
  },
  title: {
    marginTop: 50,
    alignSelf: 'center',
    color: colors.navy,
  },
  button: {
    marginBottom: 10,
  },
});

export default styles;
