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
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';

import Title from 'components/Title';
import TJTextInput from 'components/TJTextInput';
import MainButton from 'components/MainButton';
import { setUser } from 'features/login/actions';
import { validateEmail, validatePassword } from 'features/login/utils';
import styles from './styles';
import bgImage from 'assets/loginScreenBg.png';
import back from 'assets/Back.png';
import envelopeIcon from 'assets/envelopeIcon.png';
import passwordIcon from 'assets/passwordIcon.png';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleEmail = useCallback(
    text => {
      setIsValidEmail(validateEmail(text));
      setIsValidPassword(validatePassword(password));
      setEmail(text);
    },
    [setEmail, password],
  );

  const handlePassword = useCallback(
    text => {
      setIsValidPassword(validatePassword(text));
      setIsValidEmail(validateEmail(email));
      setPassword(text);
    },
    [setPassword, email],
  );

  const handleEnter = useCallback(() => {
    const isCorrectEmail = validateEmail(email);
    const isCorrectPassword = validatePassword(password);

    setIsValidEmail(isCorrectEmail);

    if (!isCorrectPassword) {
      setIsValidPassword(false);
    }

    if (isCorrectEmail && isCorrectPassword) {
      dispatch(setUser({ username: email.toLowerCase(), password }));
    }
  }, [dispatch, email, password]);

  return (
    <>
      <ImageBackground source={bgImage} style={styles.wrapper}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyBoardView}
          >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View>
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
                    isError={isValidEmail}
                  />
                  <TJTextInput
                    value={password}
                    placeholder={'Пароль'}
                    handleTextInput={handlePassword}
                    icon={passwordIcon}
                    secureTextEntry={true}
                    isError={isValidPassword}
                  />
                </View>
                <MainButton
                  title={'Войти'}
                  additionalTextStyle={styles.button}
                  incomeStyle={styles.buttonContainer}
                  handlePress={handleEnter}
                  isDisabled={!(isValidEmail && isValidPassword)}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.container} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
