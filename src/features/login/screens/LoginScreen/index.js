import React, { useCallback, useState } from 'react';
import { Image, TouchableOpacity, ImageBackground, View, SafeAreaView } from 'react-native';

import Title from 'components/Title';
import TJTExtInput from 'components/TJTextInput';
import MainButton from 'components/MainButton';
import styles from './styles';
import bgImage from 'assets/loginScreenBg.png';
import back from 'assets/Back.png';
import envelopeIcon from 'assets/envelopeIcon.png';
import passwordIcon from 'assets/passwordIcon.png';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleEmail = useCallback(
    text => {
      setEmail(text);
    },
    [setEmail],
  );

  const handlePassword = useCallback(
    text => {
      setPassword(text);
    },
    [setPassword],
  );

  return (
    <>
      <ImageBackground source={bgImage} style={styles.wrapper}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.arrowBack} onPress={handleGoBack}>
            <Image source={back} />
          </TouchableOpacity>
          <Title incomeStyle={styles.title} />
          <View styles={styles.form}>
            <TJTExtInput
              placeholder={'Электронный адрес'}
              handleTextInput={handleEmail}
              icon={envelopeIcon}
            />
            <TJTExtInput
              placeholder={'Пароль'}
              handleTextInput={handlePassword}
              icon={passwordIcon}
            />
          </View>
          <MainButton
            title={'Войти'}
            additionalTextStyle={styles.button}
            incomeStyle={styles.buttonContainer}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
