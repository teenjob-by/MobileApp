import React, { useCallback, useState } from 'react';
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';

import Title from 'components/Title';
import TJTextInput from 'components/TJTextInput';
import MainButton from 'components/MainButton';
import { setUser } from 'features/login/actions';
import styles from './styles';
import bgImage from 'assets/loginScreenBg.png';
import back from 'assets/Back.png';
import envelopeIcon from 'assets/envelopeIcon.png';
import passwordIcon from 'assets/passwordIcon.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation, isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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

  const handleEnter = useCallback(() => {
    dispatch(setUser({ email: email.toLowerCase(), password }));
  }, [dispatch, email, password]);

  return (
    <>
      <ImageBackground source={bgImage} style={styles.wrapper}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.keyBoardView}
          >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TouchableOpacity style={styles.arrowBack} onPress={handleGoBack}>
                <Image source={back} />
              </TouchableOpacity>
              <Title incomeStyle={styles.title} />
              <View styles={styles.form}>
                <TJTextInput
                  value={email}
                  placeholder={'Электронный адрес'}
                  handleTextInput={handleEmail}
                  icon={envelopeIcon}
                />
                <TJTextInput
                  value={password}
                  placeholder={'Пароль'}
                  handleTextInput={handlePassword}
                  icon={passwordIcon}
                  secureTextEntry={true}
                />
              </View>
              <MainButton
                title={'Войти'}
                additionalTextStyle={styles.button}
                incomeStyle={styles.buttonContainer}
                handlePress={handleEnter}
              />
            </TouchableWithoutFeedback>
            <View style={styles.container} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
