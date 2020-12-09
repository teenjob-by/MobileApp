import React from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './styles';
import { colors } from 'src/common/theme/constants';

const TJTextInput = ({
  placeholder,
  handleTextInput,
  icon,
  additionalStyles,
  secureTextEntry,
  value,
  isError,
}) => {
  return (
    <View style={[styles.container, !isError && styles.errorContainer]}>
      <TextInput
        value={value}
        style={[styles.textInput, additionalStyles]}
        placeholder={placeholder}
        onChangeText={handleTextInput}
        placeholderTextColor={colors.navy}
        secureTextEntry={secureTextEntry}
      />
      <Image source={icon} />
    </View>
  );
};

export default TJTextInput;
