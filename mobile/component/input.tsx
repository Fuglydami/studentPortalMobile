import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {Colors} from '../contants/themes';
import {inputType} from '../contants/types';
import assets from '../contants/assets';
export const Input = ({
  placeholder,
  label,
  error,
  text,
  setText,
}: inputType) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export const PasswordInput = ({
  placeholder,
  label,
  error,
  text,
  setText,
}: inputType) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        secureTextEntry={!isPasswordVisible}
        value={text}
        onChangeText={newText => setText(newText)}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        style={styles.eyeIconContainer}
        onPress={togglePasswordVisibility}>
        <Image source={assets.Eye} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIconContainer: {
    position: 'absolute',
    top: 48,
    right: 20,
  },

  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  inputStyle: {
    height: 55,
    color: Colors.primaryBlack,
    backgroundColor: Colors.primaryGrey,
    fontFamily: 'Quicksand-Medium',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  label: {
    marginBottom: 10,
    fontSize: 14,
    color: Colors.primaryBlack,
    fontFamily: 'Mulish-SemiBold',
  },
  error: {
    fontSize: 12,
    color: Colors.danger,
    marginTop: 3,
    fontFamily: 'Quicksand-Medium',
  },
});
