import React from 'react';
import { View, Text } from 'react-native';

import TabView from 'features/main/components/TabView';
import styles from './styles';

const FindJobScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поиск работы</Text>
      <TabView />
    </View>
  );
};

export default FindJobScreen;
