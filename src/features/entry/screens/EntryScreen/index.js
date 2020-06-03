import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import bgImage from 'assets/entryScreenBg.png';
import MainButton from 'components/MainButton';
import Title from 'components/Title';

const EntryScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={bgImage} style={styles.wrapper}>
        <Title />
        <View>
          <MainButton incomeStyle={styles.button} title={'Я новый пользователь'} />
          <MainButton
            incomeStyle={styles.button}
            title={'У меня есть аккаунт'}
            handlePress={() => navigation.navigate('IntermediateScreen')}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1 },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 135,
    paddingBottom: 60,
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#4261BC',
  },
  button: {
    marginBottom: 10,
  },
});

export default EntryScreen;
