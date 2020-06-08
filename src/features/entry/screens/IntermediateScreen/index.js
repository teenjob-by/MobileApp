import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import Title from 'components/Title';
import back from 'assets/Back.png';
import MainButton from 'components/MainButton';
import styles from './styles';

const IntermediateScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <Title incomeStyle={styles.title} />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton incomeStyle={styles.button} title={'Я работодатель'} />
        <MainButton incomeStyle={styles.button} title={'Я ищу работу'} />
      </View>
      <View />
    </View>
  );
};

export default IntermediateScreen;
