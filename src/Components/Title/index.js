import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ incomeStyle }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 72,
      fontWeight: 'bold',
      color: '#fff',
      ...incomeStyle,
    },
  });

  return (
    <View>
      <Text style={styles.title}>teenjob</Text>
    </View>
  );
};

export default Title;
