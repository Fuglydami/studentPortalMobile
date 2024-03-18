import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HeaderText from '../../component/HeaderText';
import LogoHeader from '../../component/logoHeader';
import Spacer from '../../component/spacer';
import {Input} from '../../component/input';
import CustomButton from '../../component/button';
import {Colors} from '../../contants/themes';

const ForgetPassword = () => {
  const handlePassword = () => {};
  return (
    <ScrollView>
      <View style={styles.container}>
        <Spacer height={75} />

        <HeaderText
          text1="Forgot Password"
          text2="Enter your email or phone number to recover password"
        />
        <Spacer height={40} />
        <Input
          //   error={usernameError}
          //   text={username}
          //   setText={text => setFormData({...formData, username: text})}
          //   label="Username or Matric No"
          placeholder="Enter your email or phone number"
        />

        <Spacer height={70} />
        <CustomButton title="Reset" onPress={handlePassword} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  forgetPasswordContainer: {
    alignItems: 'flex-end',
  },

  forgetPassword: {
    color: Colors.primaryGreen,
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
  },
});

export default ForgetPassword;
