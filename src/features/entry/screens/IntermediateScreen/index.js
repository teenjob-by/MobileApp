import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Title from 'components/Title';
import back from 'assets/Back.png';
import MainButton from 'components/MainButton';
import { colors } from 'common/theme/constants';

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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    paddingVertical: 75,
  },
  container: {
    alignSelf: 'stretch',
  },
  arrowBack: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    padding: 15,
  },
  title: {
    marginTop: 50,
    alignSelf: 'center',
    color: colors.navy,
  },
  button: {
    marginBottom: 10,
  },
});
