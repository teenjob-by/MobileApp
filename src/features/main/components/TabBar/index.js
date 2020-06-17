import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import TabItem from './TabItem';
import styles from './styles';

const TabBar = ({ screens, setCurrentView }) => {
  const [isActive, setIsActive] = useState(0);

  const handleActiveTab = useCallback(
    index => {
      setCurrentView(index);
      setIsActive(index);
    },
    [setCurrentView, setIsActive],
  );

  return (
    <>
      <View style={styles.container}>
        {screens.map((screen, index) => (
          <TabItem
            key={index}
            screenName={screen.name}
            index={index}
            handlePress={handleActiveTab}
            isActive={isActive}
          />
        ))}
      </View>
    </>
  );
};

export default TabBar;
