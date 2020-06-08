import React, { useCallback } from 'react';
import { View, ImageBackground } from 'react-native';

import bgImage from 'assets/entryScreenBg.png';
import MainButton from 'components/MainButton';
import Title from 'components/Title';
import styles from './styles.js';

const EntryScreen = ({ navigation }) => {
  const handleNavigationIntermediate = useCallback(() => {
    navigation.navigate('INTERMEDIATE_SCREEN');
  }, [navigation]);

  return (
    <>
      <ImageBackground source={bgImage} style={styles.wrapper}>
        <Title />
        <View>
          <MainButton incomeStyle={styles.button} title={'Я новый пользователь'} />
          <MainButton
            incomeStyle={styles.button}
            title={'У меня есть аккаунт'}
            handlePress={handleNavigationIntermediate}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default EntryScreen;
