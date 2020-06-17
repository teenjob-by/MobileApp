import React, { useState } from 'react';
import { View } from 'react-native';

import TabBar from 'features/main/components/TabBar';
import { TAB_VIEW_SCREENS } from 'features/main/constants';
import styles from './styles';

const CurrentTab = ({ currentTab }) => TAB_VIEW_SCREENS[currentTab].component;

const TabView = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TabBar screens={TAB_VIEW_SCREENS} setCurrentView={setCurrentTab} />
        </View>
        <CurrentTab currentTab={currentTab} />
      </View>
    </>
  );
};

export default TabView;
