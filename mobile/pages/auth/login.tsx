import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import LogoHeader from '../../component/logoHeader';
import HeaderText from '../../component/HeaderText';
import Spacer from '../../component/spacer';
import {useLoading} from '../../hooks/loadingContext';
import {Colors} from '../../contants/themes';
import {Input, PasswordInput} from '../../component/input';

import CustomButton from '../../component/button';
import {validateForm} from '../../component/common';
import {useApiService} from '../../hooks/useApiService';
import {LOGIN} from '../../services/api-url';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const Login = ({navigation}: any) => {
  const {setUserData} = useGlobalContext();
  const {showLoading, hideLoading} = useLoading();

  const {post, loading, error} = useApiService();
  const [formData, setFormData] = useState({
    matricNo: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    usernameError: '',
    passwordError: '',
  });

  const handleLogin = async () => {
    const {matricNo, password} = formData;
    const usernameErrorText = 'Please enter your username or matric number.';
    const passwordErrorText = 'Please enter your password.';

    const {usernameError, passwordError} = validateForm(
      matricNo,
      password,
      usernameErrorText,
      passwordErrorText,
    );

    setErrors({usernameError, passwordError});

    if (!usernameError && !passwordError) {
      showLoading();
      const {data} = await post<{message: string}>(LOGIN, {
        matricNo,
        password,
      });

      hideLoading();
      if (data) {
        setUserData(data);

        navigation.navigate('Home');
      } else {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Login failed',
          textBody: 'Check your credentials and try again',
        });
      }
    }
  };

  const {matricNo, password} = formData;
  const {usernameError, passwordError} = errors;
  return (
    <ScrollView>
      <View style={styles.container}>
        <LogoHeader />
        <Spacer height={50} />

        <HeaderText
          text1="Login"
          text2="Login to access lectures and account informations"
        />
        <Spacer height={40} />
        <Input
          error={usernameError}
          text={matricNo}
          setText={text => setFormData({...formData, matricNo: text})}
          label="Username or Matric No"
          placeholder="Enter your Username or Matric no"
        />
        <Spacer height={25} />
        <PasswordInput
          error={passwordError}
          text={password}
          setText={text => setFormData({...formData, password: text})}
          label="Password"
          placeholder="Enter your Password"
        />
        <Spacer height={10} />
        <View style={styles.forgetPasswordContainer}>
          <Text
            onPress={() => navigation.navigate('ForgetPassword')}
            style={styles.forgetPassword}>
            Forgot Password?
          </Text>
        </View>
        <Spacer height={70} />
        <CustomButton title="Login" onPress={handleLogin} />
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

export default Login;
