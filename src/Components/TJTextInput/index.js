import React from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './styles';
import { colors } from 'src/common/theme/constants';

const TJTextInput = ({ placeholder, handleTextInput, icon, additionalStyles }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, additionalStyles]}
        placeholder={placeholder}
        onChangeText={handleTextInput}
        placeholderTextColor={colors.navy}
      />
      <Image source={icon} />
    </View>
  );
};

export default TJTextInput;
