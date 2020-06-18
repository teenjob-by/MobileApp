import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import TabView from 'features/main/components/TabView';
import styles from './styles';
import { fetchJobs } from 'features/main/actions';

const FindJobScreen = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.accessToken);

  useEffect(() => {
    dispatch(fetchJobs(token));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поиск работы</Text>
      <TabView />
    </View>
  );
};

export default FindJobScreen;
