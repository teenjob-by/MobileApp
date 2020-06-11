import { StyleSheet } from 'react-native';
import { colors } from 'common/theme/constants';

const styles = StyleSheet.create({
  keyBoardView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  arrowBack: {
    alignSelf: 'flex-start',
    marginLeft: 25,
    padding: 15,
  },
  title: {
    marginTop: 50,
    marginBottom: 147,
    alignSelf: 'center',
    color: colors.navy,
  },
  buttonContainer: {
    marginTop: 66,
    alignSelf: 'center',
  },
  button: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
  },
});

export default styles;
