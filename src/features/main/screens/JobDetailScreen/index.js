import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const JobDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  console.warn(route.params);
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>JobDetailScreen</Text>
    </View>
  );
};

export default JobDetailScreen;
