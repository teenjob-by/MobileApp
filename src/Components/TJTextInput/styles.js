import { StyleSheet } from 'react-native';
import { colors } from 'src/common/theme/constants';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: 325,
    height: 40,
    borderWidth: 1.4,
    borderRadius: 20,
    borderColor: colors.mainYellow,
    backgroundColor: colors.whiteShadow40,
    paddingLeft: 22,
    paddingRight: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorContainer: {
    borderColor: colors.errorRed,
  },
  textInput: {
    flex: 1,
    color: colors.navy,
    fontWeight: '700',
  },
});

export default styles;
