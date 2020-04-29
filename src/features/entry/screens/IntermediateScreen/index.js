import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Title from '../../../../Components/Title';
import back from '../../../../assets/Back.png';
import MainButton from '../../../../Components/MainButton';

const IntermediateScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <Title incomeStyle={{alignSelf: 'center'}} />
      </View>
      <View>
        <MainButton title={'Я работодатель'} />
        <MainButton title={'Я ищу работу'} />
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
  },
});
