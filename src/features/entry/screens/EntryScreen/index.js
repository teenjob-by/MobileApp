import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';

import bgImage from '../../../../assets/entryScreenBg.png';
import MainButton from '../../../../Components/MainButton';
import Title from '../../../../Components/Title';

const EntryScreen = ({navigation}) => {
  return (
    <>
      <ImageBackground source={bgImage} style={styles.wrapper}>
        <Title />
        <View>
          <MainButton title={'Я новый пользователь'} />
          <MainButton
            title={'У меня есть аккаунт. Войти'}
            handlePress={() => navigation.navigate('IntermediateScreen')}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#4261BC',
  },
});

export default EntryScreen;
