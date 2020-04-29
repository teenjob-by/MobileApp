import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MainButton = ({title, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#4261BC',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default MainButton;
