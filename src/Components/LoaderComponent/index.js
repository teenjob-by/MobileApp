import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Title from 'components/Title';
import { colors } from 'src/common/theme/constants';

const LoaderComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title title={'teenjob'} incomeStyle={styles.title} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.navy,
    fontSize: 100,
  },
});

export default LoaderComponent;
