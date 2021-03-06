import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from 'common/theme/constants';

const MainButton = ({ title, handlePress, incomeStyle }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, incomeStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    backgroundColor: colors.mainYellow,
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    color: colors.navy,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default MainButton;
