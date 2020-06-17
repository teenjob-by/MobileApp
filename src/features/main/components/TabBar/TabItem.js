import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const TabItem = ({ screenName, handlePress, index, isActive }) => {
  return (
    <TouchableWithoutFeedback key={screenName} onPress={() => handlePress(index)}>
      <View style={[styles.tabBarItem, isActive === index && styles.tabBarItemActive]}>
        <Text style={[styles.tabBarTitle, isActive === index && styles.tabBarTitleActive]}>
          {screenName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabItem;
