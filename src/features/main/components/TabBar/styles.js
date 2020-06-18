import { StyleSheet } from 'react-native';

import { colors } from 'src/common/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  tabBarItem: {
    flex: 1,
    paddingVertical: 10,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  tabBarItemActive: {
    borderBottomColor: colors.navy,
    borderBottomWidth: 2,
  },
  tabBarTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.gray,
    fontWeight: 'bold',
  },
  tabBarTitleActive: {
    fontSize: 20,
    color: colors.navy,
  },
});

export default styles;
