import { colors } from 'common/theme/constants';
import { StyleSheet } from 'react-native';

const tabBarOptions = {
  activeTintColor: colors.mainYellow,
  tabStyle: {
    backgroundColor: colors.ash,
    paddingTop: 5,
  },
  style: {
    backgroundColor: colors.ash,
  },
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
  },
});

export { styles, tabBarOptions };
