import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Image, SafeAreaView } from 'react-native';

import TJTextInput from 'components/TJTextInput';
import MainButton from 'components/MainButton';
import Title from 'components/Title';
import { validateEmail, validatePassword } from 'features/login/utils';
import { registrationUser } from 'features/registration/actions';
import { styles } from './styles';
import back from 'assets/Back.png';

export default ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');

  const dispatch = useDispatch();

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

  const handlePasswordConfirmation = useCallback(
    text => {
      setPasswordConfirmation(text);
    },
    [setPasswordConfirmation],
  );

  const handleEnter = useCallback(() => {
    const isCorrectEmail = validateEmail(email);
    const isCorrectPassword = validatePassword(password);

    if (isCorrectEmail && isCorrectPassword && password === passwordConfirmation) {
      dispatch(
        registrationUser({
          email: email.toLowerCase(),
          password,
          password_confirmation: passwordConfirmation,
        }),
      );
    }
  }, [dispatch, email, password, passwordConfirmation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.arrowBack} onPress={handleGoBack}>
        <Image source={back} />
      </TouchableOpacity>
      <Title incomeStyle={styles.title} />
      <TJTextInput
        value={email}
        placeholder={'Электронный адрес'}
        handleTextInput={handleEmail}
        isError={isValidEmail}
      />
      <TJTextInput
        value={password}
        placeholder={'Пароль'}
        handleTextInput={handlePassword}
        secureTextEntry={true}
        isError={isValidPassword}
      />
      <TJTextInput
        value={passwordConfirmation}
        placeholder={'Повторите пароль'}
        handleTextInput={handlePasswordConfirmation}
        secureTextEntry={true}
        isError={password === passwordConfirmation && isValidPassword}
      />
      <MainButton
        title={'Зарегистрироваться'}
        additionalTextStyle={styles.button}
        incomeStyle={styles.buttonContainer}
        handlePress={handleEnter}
        isDisabled={!(isValidEmail && isValidPassword && password === passwordConfirmation)}
      />
    </SafeAreaView>
  );
};
