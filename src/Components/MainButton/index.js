import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from 'common/theme/constants';

const MainButton = ({ title, handlePress, incomeStyle, additionalTextStyle, isDisabled }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, incomeStyle, isDisabled && styles.disabled]}
    >
      <Text style={[styles.text, additionalTextStyle, isDisabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 44,
    backgroundColor: colors.mainYellow,
    justifyContent: 'center',
    borderRadius: 6,
  },
  disabled: {
    backgroundColor: colors.ash,
    color: colors.gray,
  },
  text: {
    color: colors.navy,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  disabledText: {
    color: colors.gray,
  },
});

export default MainButton;
