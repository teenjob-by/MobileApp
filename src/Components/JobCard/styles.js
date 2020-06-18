import { StyleSheet } from 'react-native';
import { colors } from 'src/common/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    padding: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.mainYellow,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  favorites: {
    color: colors.mainYellow,
    fontSize: 25,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 12,
    color: colors.gray,
  },
  description: {
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: colors.gray,
    fontSize: 12,
  },
  contacts: {
    color: colors.blue,
    fontSize: 12,
  },
});

export default styles;
