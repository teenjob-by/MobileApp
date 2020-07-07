import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';

import JobCard from 'components/JobCard';
import { refreshJobs } from 'features/main/actions';
import styles from './styles';

const Jobs = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.jobs.data);
  const token = useSelector(state => state.user.accessToken);

  const isRefreshingJobs = useSelector(state => state.jobs.isRefreshingJobs);
  const renderItem = useCallback(
    ({ item }) => (
      <JobCard
        title={item.title}
        description={item.description}
        city={item.city.name}
        publishDate={item.published_at}
      />
    ),
    [],
  );

  const onRefresh = useCallback(() => {
    dispatch(refreshJobs(token));
  }, [dispatch, token]);

  return (
    <View style={styles.cardContainer}>
      {data && (
        <FlatList
          style={styles.cardContainer}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={isRefreshingJobs}
          onRefresh={onRefresh}
        />
      )}
    </View>
  );
};

export default Jobs;
