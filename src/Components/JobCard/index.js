import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { months } from './months';
import styles from './styles';

const JobCard = ({ title, description, city, publishDate, contacts }) => {
  const navigation = useNavigation();

  const date = new Date(publishDate);
  const month = date.getMonth();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('JOB_DETAIL_SCREEN', { testProp: 'testProp' })}
      style={styles.container}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.city}>{city}</Text>
        </View>
        <TouchableWithoutFeedback>
          <FontAwesome5 name='star' style={styles.favorites} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.date}>{`${date.getDate()}  ${months[month + 1]}`}</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.contacts}>Контакты</Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
